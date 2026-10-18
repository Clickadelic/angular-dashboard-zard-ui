import { Component, inject } from '@angular/core';
import { AccordionItem } from '../accordion-item/accordion-item';

@Component({
  selector: 'app-accordion-content',
  standalone: true,
  template: `
    @if (item.isOpen()) {
      <div class="p-4 text-sm text-muted-foreground transition-all">
        <ng-content />
      </div>
    }
  `,
})
export class AccordionContent {
  item = inject(AccordionItem);
}
