import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar, lucideHouse, lucideGauge, lucideInbox, lucideSettings, lucideHeartPulse, lucideUsers, lucideFileText } from '@ng-icons/lucide';
import { ZardSidebarImports } from '@/shared/components/sidebar/sidebar.imports';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { DarkModeToggleComponent } from './darkmode-toggle/darkmode-toggle';

/**
 * @return The dashboard layout component.
 */
@Component({
  selector: 'app-dashboard-layout',
  imports: [ZardSidebarImports, NgIcon, RouterOutlet, RouterLink, Breadcrumbs, DarkModeToggleComponent],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideCalendar, lucideHouse, lucideGauge, lucideInbox, lucideSettings, lucideHeartPulse, lucideUsers, lucideFileText })],
})

export class DashboardLayout {}

