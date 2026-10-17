import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import {
  LucideHouse,
  LucideLogOut,
  LucideX,
  LucideFileText,
  LucideGauge,
} from '@lucide/angular';

import { Dropdown, DropdownItem } from '../../../components/ui/dropdown/dropdown';

// Component markup for the header and sidebar of the dashboard
@Component({
  selector: 'app-header-sidebar',
  imports: [LucideHouse, LucideLogOut, LucideX, LucideFileText, LucideGauge, Dropdown, DropdownItem],
  templateUrl: './header-sidebar.html',
  styleUrl: './header-sidebar.css',
})
export class HeaderSidebar {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
