import { Component, signal } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { AccordionItem } from '../../../components/ui/accordion/accordion-item';
import { AccordionTrigger } from '../../../components/ui/accordion/accordion-trigger';
import { AccordionContent } from '../../../components/ui/accordion/accordion-content';
import {
  LucideHouse,
  LucideMoveRight,
  LucideX,
  LucideFileText,
  LucideGauge,
  LucideSearch,
  LucideCheck,
  LucideUser
} from '@lucide/angular';
import { Modal } from '../../../components/ui/modal/modal';

@Component({
  selector: 'app-component-library-page',
  imports: [
    Button,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    LucideHouse,
    LucideMoveRight,
    LucideX,
    LucideFileText,
    LucideGauge,
	LucideSearch,
	LucideCheck,
	LucideUser,
    Modal
  ],
  templateUrl: './component-library-page.html',
  styleUrl: './component-library-page.css',
})
export class ComponentLibraryPage {
	isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }
}
