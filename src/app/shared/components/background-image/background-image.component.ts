import { Component, computed, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageService } from '@/shared/services/background-image';

import type { CreditsPosition } from '@/types';

/**
 * A component that displays a background image with optional credits.
 * The image is loaded from the BackgroundImageService and can have a preview and full-resolution version.
 * The position of the credits can be customized using the `creditsPosition` input.
 * @param {CreditsPosition} creditsPosition - The position of the credits (left, center, right).
 *
 * @export
 * @class BackgroundImageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-background-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-image.component.html',
  providers: [BackgroundImageService],
  host: {
    class: 'min-h-dvh flex flex-col items-center justify-center w-full',
  },
})
export class BackgroundImageComponent implements OnInit {
  private readonly backgroundImageService = inject(BackgroundImageService);

  readonly classNames = input<string>('');

  readonly creditsPosition = input<CreditsPosition>('left');

  readonly image = this.backgroundImageService.image;

  readonly creditPositionClass = computed(() => {
    const positions: Record<CreditsPosition, string> = {
      left: 'left-4',
      center: 'left-1/2 -translate-x-1/2',
      right: 'right-4',
    };

    return positions[this.creditsPosition()];
  });

  ngOnInit(): void {
    this.backgroundImageService.load();
  }
}
