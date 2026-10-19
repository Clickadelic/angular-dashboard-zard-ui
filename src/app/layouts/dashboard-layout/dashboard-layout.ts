import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSidebar } from './header-sidebar/header-sidebar';
import { Breadcrumbs } from '../../components/ui/breadcrumbs/breadcrumbs';
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [HeaderSidebar, RouterOutlet, Breadcrumbs],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  // Der Zustand wohnt jetzt zentral im Layout
  isSidebarOpen = signal(true);

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }
}
