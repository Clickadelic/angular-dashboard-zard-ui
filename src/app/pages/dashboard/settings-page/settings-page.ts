import { Component, signal } from '@angular/core';
import { Modal } from '../../../components/ui/modal/modal';
import { Tabs } from '../../../components/ui/tabs/tabs/tabs';

@Component({
  selector: 'app-settings-page',
  imports: [Modal, Tabs],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css',
})
export class SettingsPage {
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
