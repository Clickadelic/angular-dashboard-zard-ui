import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-link',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a [routerLink]="link()" class="transition-colors hover:text-gray-950 font-medium">
      <ng-content />
    </a>
  `,
})
export class BreadcrumbLink {
  link = input.required<string>();
}
