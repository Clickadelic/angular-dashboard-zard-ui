import { Component, inject, input, output, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { Dropdown, DropdownItem } from '../../../components/ui/dropdown/dropdown';
import {
  LucideHouse,
  LucideGauge,
  LucideLogOut,
  LucideLayers,
  LucidePanelRightOpen,
  LucideUsers
} from '@lucide/angular';

@Component({
  selector: 'app-header-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Dropdown,
    DropdownItem,
    LucideHouse,
    LucideGauge,
    LucideLogOut,
    LucideLayers,
    LucidePanelRightOpen,
	LucideUsers
  ],
  templateUrl: './header-sidebar.html',
  styleUrl: './header-sidebar.css',
})
export class HeaderSidebar {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Zustand kommt von außen (vom DashboardLayout)
  isOpen = input.required<boolean>();

  // Event-Emitter für den Klick auf den Toggle-Button
  toggle = output<void>();

  currentUser = signal({
    name: localStorage.getItem('user_name') || 'Benutzer',
  });

  onToggleClick() {
    this.toggle.emit();
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => this.cleanupAndRedirect(),
      error: () => this.cleanupAndRedirect(),
    });
  }

  private cleanupAndRedirect() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
    this.router.navigate(['/login']);
  }
}
