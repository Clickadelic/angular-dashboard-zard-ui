import { Component } from '@angular/core';
import { LucideTrendingUp, LucideTrendingDown, LucideMoveRight } from '@lucide/angular';
import { ZardCardImports } from '@/shared/components/card/card.imports';

import { DashboardCardComponent } from '@/layouts/dashboard-layout/dashboard-card/dashboard-card';


import { BarChartComponent } from '@/shared/components/charts/bar-chart/bar-chart';
import { WaveChartComponent } from '@/shared/components/charts/wave-chart/wave-chart';
import { TodoList } from '@/features/todo-list/todo-list';

/**
 * @return The dashboard page component.
 */
@Component({
  selector: 'app-dashboard-page',
  imports: [
    LucideTrendingUp,
    LucideTrendingDown,
    LucideMoveRight,
	ZardCardImports,
    DashboardCardComponent,
    BarChartComponent,
    WaveChartComponent,
    TodoList
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
