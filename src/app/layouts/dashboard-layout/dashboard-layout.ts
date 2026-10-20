import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardSidebarImports } from '@/shared/components/sidebar/sidebar.imports';
import { DarkModeToggleComponent } from '@/layouts/dashboard-layout/darkmode-toggle/darkmode-toggle';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, ZardSidebarImports, DarkModeToggleComponent, Breadcrumbs],
  templateUrl: './dashboard-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayout {}
