import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb-link.html',
  styleUrl: './breadcrumb-link.css',
})
export class BreadcrumbLink {
  link = input.required<string>();
}
