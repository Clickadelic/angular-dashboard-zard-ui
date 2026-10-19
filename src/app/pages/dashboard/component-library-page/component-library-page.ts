import { Component, signal } from '@angular/core';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-component-library-page',
  imports: [ZardButtonComponent],
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
