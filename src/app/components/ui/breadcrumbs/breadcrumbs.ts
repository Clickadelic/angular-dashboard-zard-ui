import { Component, inject } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { LucideHouse, LucideChevronRight } from '@lucide/angular';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink, LucideHouse, LucideChevronRight],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.css',
})
export class Breadcrumbs {
  private router = inject(Router);

  // Wörterbuch für sprechende Namen
  private routeLabels: Record<string, string> = {
    dashboard: 'Dashboard',
    'component-library': 'Component Library',
    settings: 'Einstellungen',
    profile: 'Profil',
  };

  // Korrektes Signal: Stream von NavigationEnd wird direkt zu BreadcrumbItem[] gemappt
  breadcrumbs = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => this.createBreadcrumbs(event.urlAfterRedirects)),
      startWith(this.createBreadcrumbs(this.router.url)),
    ),
    {
      initialValue: this.createBreadcrumbs(this.router.url),
    },
  );

  private createBreadcrumbs(url: string): BreadcrumbItem[] {
    const segments = url.split('?')[0].split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    let accumulatedUrl = '';

    for (const segment of segments) {
      if (segment === 'dashboard' && breadcrumbs.length === 0) {
        accumulatedUrl += `/${segment}`;
        continue;
      }

      accumulatedUrl += `/${segment}`;
      const label = this.routeLabels[segment] || this.formatSlug(segment);

      breadcrumbs.push({
        label,
        url: accumulatedUrl,
      });
    }

    return breadcrumbs;
  }

  private formatSlug(slug: string): string {
    return slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
