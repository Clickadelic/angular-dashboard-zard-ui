import { Component, signal } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { AccordionItem } from '../../../components/ui/accordion/accordion-item';
import { AccordionTrigger } from '../../../components/ui/accordion/accordion-trigger';
import { AccordionContent } from '../../../components/ui/accordion/accordion-content';
import { Modal } from '../../../components/ui/modal/modal';
import { Tabs } from '../../../components/ui/tabs/tabs/tabs';
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
    Modal,
    Tabs
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
