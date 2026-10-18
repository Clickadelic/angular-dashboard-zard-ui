import { Component, contentChildren, signal } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})
export class Tabs {
  // Wir definieren den Standard-Tab (kann auch per Input übergeben werden)
  activeTab = signal<string>('account');

  selectTab(tabId: string) {
    this.activeTab.set(tabId);
  }
}