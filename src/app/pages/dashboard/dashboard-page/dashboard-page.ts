import { Component } from '@angular/core';
import { LucideTrendingUp, LucideTrendingDown, LucideMoveRight } from '@lucide/angular';

import { BarChartComponent } from '../../../components/charts/bar-chart/bar-chart';
import { WaveChartComponent } from '../../../components/charts/wave-chart/wave-chart';
import { TodoList } from '../../../components/features/todo-list/todo-list';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    LucideTrendingUp,
    LucideTrendingDown,
    LucideMoveRight,
    BarChartComponent,
    WaveChartComponent,
    TodoList,
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
