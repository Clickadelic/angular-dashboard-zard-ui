import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [ZardCardImports],
  templateUrl: './dashboard-card.html',
  styleUrl: './dashboard-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardCardComponent {}
