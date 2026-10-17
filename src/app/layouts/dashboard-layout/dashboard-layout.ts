import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSidebar } from '../../components/dashboard-shell/header-sidebar/header-sidebar'; 

@Component({
  selector: 'app-dashboard-layout',
  imports: [HeaderSidebar, RouterOutlet],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
