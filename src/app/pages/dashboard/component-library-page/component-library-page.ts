import { Component, signal } from '@angular/core';
// import { Button } from '../../../components/ui/button/button';
// import { AccordionItem } from '../../../components/ui/accordion/accordion-item/accordion-item';
// import { AccordionTrigger } from '../../../components/ui/accordion/accordion-trigger/accordion-trigger';
// import { AccordionContent } from '../../../components/ui/accordion/accordion-content/accordion-content';
// import { Modal } from '../../../components/ui/modal/modal';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import {
  LucideHouse,
  LucideMoveRight,
  LucideX,
  LucideFileText,
  LucideGauge,
  LucideSearch,
  LucideCheck,
  LucideUser,
} from '@lucide/angular';
@Component({
  selector: 'app-component-library-page',
  imports: [
    // Button,
    // AccordionItem,
    // AccordionTrigger,
    // AccordionContent,
    //Modal,
    LucideHouse,
    LucideMoveRight,
    LucideX,
    LucideFileText,
    LucideGauge,
    LucideSearch,
    LucideCheck,
    LucideUser,
    ZardButtonComponent,
  ],
  templateUrl: './component-library-page.html',
  styleUrl: './component-library-page.css',
})
export class ComponentLibraryPage {
  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  // Das Signal speichert, welcher Tab aktuell aktiv ist (z. B. 'profile', 'security', 'notifications')
  activeTab = signal<'profile' | 'security' | 'notifications'>('profile');

  setTab(tab: 'profile' | 'security' | 'notifications') {
    this.activeTab.set(tab);
  }

  saveProfile() {
    console.log('Profil-Einstellungen gespeichert!');
  }
}
