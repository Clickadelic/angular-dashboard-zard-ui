import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { Dropdown, DropdownItem } from '../../../components/ui/dropdown/dropdown';
import {
  LucideHouse,
  LucideMoveRight,
  LucideX,
  LucideFileText,
  LucideGauge,
  LucideSearch,
  LucideCheck,
  LucideUser,
  LucideGrid, LucideLayers
} from '@lucide/angular';
@Component({
  selector: 'app-header-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Dropdown,
    DropdownItem,
    LucideHouse,
    LucideMoveRight,
    LucideX,
    LucideFileText,
    LucideGauge,
    LucideSearch,
    LucideCheck,
    LucideUser,
    LucideGrid,
    LucideLayers
  ],
  templateUrl: './header-sidebar.html',
  styleUrl: './header-sidebar.css',
})
export class HeaderSidebar {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Signal liest den Namen aus dem LocalStorage (Fallback auf 'Benutzer')
  currentUser = signal({ 
    name: localStorage.getItem('user_name') || 'Benutzer' 
  });

  logout() {
    this.authService.logout().subscribe({
      next: () => this.cleanupAndRedirect(),
      error: () => this.cleanupAndRedirect() // Auch bei Serverfehler lokal aufräumen
    });
  }

  private cleanupAndRedirect() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
    this.router.navigate(['/login']); // Passe den Login-Pfad an deine routes.ts an
  }
}