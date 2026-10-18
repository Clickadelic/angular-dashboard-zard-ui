import { Component } from '@angular/core';
import { LucideChevronRight } from '@lucide/angular';

@Component({
  selector: 'app-breadcrumb-separator',
  standalone: true,
  imports: [LucideChevronRight],
  template: `
    <li role="presentation" aria-hidden="true" class="text-gray-400">
      <lucide-chevron-right class="size-3.5" />
    </li>
  `,
})
export class BreadcrumbSeparator {}
