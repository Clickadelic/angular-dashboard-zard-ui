import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardSidebarImports } from '@/shared/components/sidebar/sidebar.imports';
import { DarkModeToggleComponent } from '@/layouts/dashboard-layout/darkmode-toggle/darkmode-toggle';
@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, ZardSidebarImports, DarkModeToggleComponent],
  templateUrl: './dashboard-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayout {}
