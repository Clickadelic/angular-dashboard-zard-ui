import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-header-sidebar',
  imports: [],
  templateUrl: './header-sidebar.html',
  styleUrl: './header-sidebar.css',
})
export class HeaderSidebar {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
