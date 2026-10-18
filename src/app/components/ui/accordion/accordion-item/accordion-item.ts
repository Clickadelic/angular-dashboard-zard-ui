import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.css',
})
export class AccordionItem {
  // Zustand mit einem Angular Signal
  isOpen = signal(false);

  toggle() {
    this.isOpen.update((v) => !v);
  }
}
