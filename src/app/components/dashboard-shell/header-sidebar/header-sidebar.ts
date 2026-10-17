import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import {
  LucideHouse,
  LucideMoveRight,
  LucideX,
  LucideFileText,
  LucideGauge,
} from '@lucide/angular';
@Component({
  selector: 'app-header-sidebar',
  imports: [LucideHouse, LucideMoveRight, LucideX, LucideFileText, LucideGauge],
  templateUrl: './header-sidebar.html',
  styleUrl: './header-sidebar.css',
})
export class HeaderSidebar {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
