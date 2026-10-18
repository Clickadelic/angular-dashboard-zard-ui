import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSidebar } from '../../components/dashboard-shell/header-sidebar/header-sidebar';
import { BreadcrumbContainer } from '../../components/ui/breadcrumb/breadcrumb-container/breadcrumb-container';
import { BreadcrumbItem } from '../../components/ui/breadcrumb/breadcrumb-item/breadcrumb-item';
import { BreadcrumbLink } from '../../components/ui/breadcrumb/breadcrumb-link/breadcrumb-link';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    HeaderSidebar,
    RouterOutlet,
    BreadcrumbContainer,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
  ],
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
