import { Component } from '@angular/core';
import { LucideTrendingUp, LucideTrendingDown, LucideMoveRight } from '@lucide/angular';
import { ZardCardImports } from '@/shared/components/card/card.imports';

import { DashboardCardComponent } from '@/layouts/dashboard-layout/dashboard-card/dashboard-card';
import { UserCard } from '@/features/user-card/user-card';

import type { User } from '@/types';
import { BarChartComponent } from '@/shared/components/charts/bar-chart/bar-chart';
import { WaveChartComponent } from '@/shared/components/charts/wave-chart/wave-chart';
import { TodoList } from '@/features/todo-list/todo-list';

// Demo Data
import users from '@/data/users.json';

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
    ZardCardImports,
    DashboardCardComponent,
    BarChartComponent,
    WaveChartComponent,
    TodoList,
    UserCard,
  ],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  readonly users: User[] = users;
}
