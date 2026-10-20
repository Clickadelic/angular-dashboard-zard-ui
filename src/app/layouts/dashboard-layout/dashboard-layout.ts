import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalendar, lucideHouse, lucideInbox, lucideSettings } from '@ng-icons/lucide';
import { ZardSidebarImports } from '@/shared/components/sidebar/sidebar.imports';

@Component({
  selector: 'app-dashboard-layout',
  imports: [ZardSidebarImports, NgIcon, RouterOutlet, RouterLink],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideCalendar, lucideHouse, lucideInbox, lucideSettings })],
})

export class DashboardLayout {
  readonly navItems = [
    { title: 'Home', icon: 'lucideHouse' },
    { title: 'Inbox', icon: 'lucideInbox' },
    { title: 'Calendar', icon: 'lucideCalendar' },
    { title: 'Settings', icon: 'lucideSettings' },
  ];
}

