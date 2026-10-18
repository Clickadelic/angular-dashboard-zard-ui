import { Component } from '@angular/core';
import { LucideTrendingUp, LucideTrendingDown, LucideMoveRight } from '@lucide/angular';

@Component({
  selector: 'app-dashboard-page',
  imports: [LucideTrendingUp, LucideTrendingDown, LucideMoveRight],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {}
