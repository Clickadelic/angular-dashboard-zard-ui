import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  template: `
    <div class="border-b border-border">
      <ng-content />
    </div>
  `,
})
export class AccordionItem {
  // Zustand mit einem Angular Signal
  isOpen = signal(false);

  toggle() {
    this.isOpen.update((v) => !v);
  }
}
