import { Component } from '@angular/core';
import { 
  NgApexchartsModule, 
  ApexAxisChartSeries, 
  ApexChart, 
  ApexXAxis, 
  ApexDataLabels, 
  ApexTitleSubtitle, 
  ApexStroke, 
  ApexFill, 
  ApexYAxis 
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-wave-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './wave-chart.html',
  styleUrl: './wave-chart.css'
})
export class WaveChartComponent {
  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Aktive Benutzer',
        data: [31, 40, 28, 51, 42, 109, 100]
      }
    ],
    chart: {
      type: 'area', // Erzeugt die fließende Fläche unter der Kurve
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth' // Macht die Linien weich / wellenförmig
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    title: {
      text: 'Wöchentliche Aktivität',
      align: 'left'
    },
    xaxis: {
      categories: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
    },
    yaxis: {
      labels: {
        formatter: (val: number) => { return val.toFixed(0); }
      }
    }
  };
}