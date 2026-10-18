import { Component, inject } from '@angular/core';
import { AccordionItem } from '../accordion-item/accordion-item';

@Component({
  selector: 'app-accordion-trigger',
  standalone: true,
  imports: [],
  templateUrl: './accordion-trigger.html',
  styleUrl: './accordion-trigger.css',
})
export class AccordionTrigger {
  // Holt sich das elterliche AccordionItem über DI (Dependency Injection)
  item = inject(AccordionItem);
}
