import { DestroyRef, Injectable, inject, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface UnsplashImageResponse {
  url: string;
  photo?: {
    alt_description?: string | null;
    urls?: {
      small?: string;
      thumb?: string;
    };
    links?: {
      html?: string;
    };
    user?: {
      name?: string | null;
      links?: {
        html?: string;
      };
    };
  };
}

export interface UnsplashImageCredit {
  author: string;
  authorUrl: string;
  unsplashUrl: string;
}

export interface UnsplashImageState {
  url: string | null;
  previewUrl: string | null;
  alt: string;
  credit: UnsplashImageCredit | null;
}

const INITIAL_STATE: UnsplashImageState = {
  url: null,
  previewUrl: null,
  alt: '',
  credit: null,
};

const UNSPLASH_ENDPOINT =
  'https://api.tobias-hopp.de/api/v1/unsplash/image/seasonal?strategy=daily&response=json&variant=full&w=2400&fit=crop';

@Injectable()
export class BackgroundImageService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  readonly image = signal<UnsplashImageState>(INITIAL_STATE);

  private preloadedImage?: HTMLImageElement;
  private destroyed = false;

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;

      if (this.preloadedImage) {
        this.preloadedImage.onload = null;
        this.preloadedImage.onerror = null;
        this.preloadedImage.src = '';
      }
    });
  }

  load(): void {
    this.http
      .get<UnsplashImageResponse>(UNSPLASH_ENDPOINT)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          if (!response.url || this.destroyed) {
            return;
          }

          const previewUrl = response.photo?.urls?.small ?? response.photo?.urls?.thumb ?? null;

          const credit =
            response.photo?.user?.name &&
            response.photo.user.links?.html &&
            response.photo.links?.html
              ? {
                  author: response.photo.user.name,
                  authorUrl: response.photo.user.links.html,
                  unsplashUrl: response.photo.links.html,
                }
              : null;

          // Preview immediately display
          this.image.set({
            url: null,
            previewUrl,
            alt: response.photo?.alt_description ?? '',
            credit,
          });

          this.preloadFullImage(response.url);
        },

        error: (error) => {
          if (this.destroyed) return;

          console.warn('Failed to fetch background image:', error);
        },
      });
  }

  private preloadFullImage(url: string): void {
    const img = new Image();

    this.preloadedImage = img;

    img.onload = () => {
      if (this.destroyed) return;

      this.image.update((state) => ({
        ...state,
        url,
      }));
    };

    img.onerror = () => {
      if (this.destroyed) return;

      console.error('Failed to preload full-resolution background image. Using preview.', url);
    };

    img.src = url;
  }
}
