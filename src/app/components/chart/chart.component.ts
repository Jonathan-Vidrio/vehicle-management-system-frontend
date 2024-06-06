import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart } from '../../../interfaces/chart.interface';
import { Chart as ChartJs, registerables } from 'chart.js';

type ChartType =
  | 'line'
  | 'bar'
  | 'pie'
  | 'doughnut'
  | 'radar'
  | 'polarArea'
  | 'bubble'
  | 'scatter';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
})
export class ChartComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() type: ChartType = 'bar';
  @Input() chartId: string = 'chart';

  @Input() data2020: Chart[] = [];
  @Input() data2021: Chart[] = [];
  @Input() data2022: Chart[] = [];
  @Input() data2023: Chart[] = [];
  @Input() data2024: Chart[] = [];

  constructor() {
    ChartJs.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.RenderChart();
  }

  RenderChart(): void {
    const ctx = document.getElementById(this.chartId) as HTMLCanvasElement;
    new ChartJs(ctx, {
      type: this.type,
      data: {
        labels: this.data2020.map((x) => x.label),
        datasets: [
          {
            label: '2020',
            data: this.data2020.map((x) => x.value),
            backgroundColor: 'rgba(59, 130, 246, 1)',
            borderColor: 'rgba(59,130,246,0.51)',
          },
          {
            label: '2021',
            data: this.data2021.map((x) => x.value),
            backgroundColor: 'rgb(246,59,59)',
            borderColor: 'rgba(246,59,59,0.51)',
          },
          {
            label: '2022',
            data: this.data2022.map((x) => x.value),
            backgroundColor: 'rgb(246,153,59)',
            borderColor: 'rgba(246,171,59,0.51)',
          },
          {
            label: '2023',
            data: this.data2023.map((x) => x.value),
            backgroundColor: 'rgb(84,246,59)',
            borderColor: 'rgba(106,246,59,0.51)',
          },
          {
            label: '2024',
            data: this.data2024.map((x) => x.value),
            backgroundColor: 'rgb(128,59,246)',
            borderColor: 'rgba(128,59,246,0.51)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'rgba(255, 255, 255, 0.87)', // text-white with opacity for legend labels
            },
          },
          title: {
            display: true,
            text: this.title,
            color: 'rgba(255, 255, 255, 0.87)', // text-white with opacity for title
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(156, 163, 175, 0.87)', // text-gray-400 with opacity for x-axis labels
            },
            grid: {
              color: 'rgba(75, 85, 99, 0.2)', // bg-gray-700 with opacity for x-axis grid lines
            },
          },
          y: {
            ticks: {
              color: 'rgba(156, 163, 175, 0.87)', // text-gray-400 with opacity for y-axis labels
            },
            grid: {
              color: 'rgba(75, 85, 99, 0.2)', // bg-gray-700 with opacity for y-axis grid lines
            },
          },
        },
      },
    });
  }
}
