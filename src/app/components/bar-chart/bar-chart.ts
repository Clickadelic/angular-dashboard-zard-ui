import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTitleSubtitle } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.html',
  styleUrl: './bar-chart.css'
})
export class BarChartComponent {
  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Umsatz (€)',
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Monatlicher Umsatz'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt'
      ]
    }
  };
}