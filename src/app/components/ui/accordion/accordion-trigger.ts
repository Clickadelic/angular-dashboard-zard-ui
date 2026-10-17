import { Component, inject } from '@angular/core';
import { AccordionItem } from './accordion-item';

@Component({
  selector: 'app-accordion-trigger',
  standalone: true,
  template: `
    <button
      type="button"
      (click)="item.toggle()"
      class="bg-white flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-sm"
    >
      <ng-content />
      <!-- Chevron Icon das sich dreht -->
      <svg
        class="h-4 w-4 shrink-0 transition-transform duration-200"
        [class.rotate-180]="item.isOpen()"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  `,
})
export class AccordionTrigger {
  // Holt sich das elterliche AccordionItem über DI (Dependency Injection)
  item = inject(AccordionItem);
}
