import { Component } from '@angular/core';
import { LucideTrendingUp, LucideTrendingDown, LucideMoveRight } from '@lucide/angular';

import { BarChartComponent } from '../../../components/bar-chart/bar-chart';

@Component({
  selector: 'app-dashboard-page',
  imports: [LucideTrendingUp, LucideTrendingDown, LucideMoveRight, BarChartComponent],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
