import { Component } from '@angular/core';
import { LucideTrendingUp, LucideTrendingDown, LucideMoveRight } from '@lucide/angular';

import { DashboardCardComponent } from '@/layouts/dashboard-layout/dashboard-card/dashboard-card';

import { BarChartComponent } from '@/shared/components/charts/bar-chart/bar-chart';
import { WaveChartComponent } from '@/shared/components/charts/wave-chart/wave-chart';
import { TodoList } from '@/features/todo-list/todo-list';

/**
 * The dashboard page component.
 *
 * @export
 * @class DashboardPage
 */
@Component({
  selector: 'app-dashboard-page',
  imports: [
    LucideTrendingUp,
    LucideTrendingDown,
    LucideMoveRight,
    DashboardCardComponent,
    BarChartComponent,
    WaveChartComponent,
    TodoList,
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
