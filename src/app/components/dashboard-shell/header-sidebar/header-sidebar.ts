import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; // <--- 1. Router importieren
import { AuthService } from '../../../services/auth-service';
import {
  LucideHouse,
  LucideLogOut,
  LucideX,
  LucideFileText,
  LucideGauge,
} from '@lucide/angular';

import { Dropdown, DropdownItem } from '../../../components/ui/dropdown/dropdown';

@Component({
  selector: 'app-header-sidebar',
  imports: [LucideHouse, LucideLogOut, LucideX, LucideFileText, LucideGauge, Dropdown, DropdownItem],
  templateUrl: './header-sidebar.html',
  styleUrl: './header-sidebar.css',
})
export class HeaderSidebar {
  private authService = inject(AuthService);
  private router = inject(Router); // <--- 2. Router injizieren

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        // Erfolgreich vom Server ausgeloggt -> Weiterleitung zum Login
        this.router.navigate(['/auth/login']); // Passe den Pfad an, falls deine Login-Route anders heißt
      },
      error: (err) => {
        console.error('Logout fehlgeschlagen:', err);
        // Fallback: Auch bei Fehler lokal aufräumen und umleiten
        localStorage.removeItem('auth_token');
        this.router.navigate(['/auth/login']);
      }
    });
  }
}