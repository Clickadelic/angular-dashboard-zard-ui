import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';

import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardDarkMode } from '@/shared/services/dark-mode';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [NgIcon, ZardButtonComponent],
  templateUrl: './darkmode-toggle.html',
  styleUrl: './darkmode-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ lucideSun, lucideMoon })],
})
export class DarkModeToggleComponent {
  protected readonly darkMode = inject(ZardDarkMode);

  toggleTheme(): void {
    this.darkMode.toggleTheme();
  }
}