import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ZardSidebarImports } from '@/shared/components/sidebar/sidebar.imports';
import { DarkModeToggleComponent } from '@/shared/components/darkmode-toggle/darkmode-toggle';
/**
 * Header sidebar component for the dashboard layout.
 */
@Component({
  selector: 'z-demo-sidebar-structure',
  imports: [ZardSidebarImports, DarkModeToggleComponent],
  templateUrl: './header-sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZardDemoSidebarStructureComponent {}
