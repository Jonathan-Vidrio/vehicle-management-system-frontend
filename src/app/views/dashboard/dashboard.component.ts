import { Component } from '@angular/core';
import { ScorecardComponent } from '../../components/scorecard/scorecard.component';
import { Scorecard } from '../../../interfaces/scorecard.interface';
import { DashboardService } from '../../services/dashboard.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Chart } from '../../../interfaces/chart.interface';
import { ChartComponent } from '../../components/chart/chart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ScorecardComponent,
    CommonModule,
    ChartComponent,
    NgxPaginationModule,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  date = new Date();

  ////// Scorecard Reports //////

  totalMaintenancesByYear$: Observable<Scorecard[]> = of([]);
  totalMaintenancesByMonth$: Observable<Scorecard[]> = of([]);
  vehicleWithMostMaintenances$: Observable<Scorecard[]> = of([]);

  ////// Chart Reports //////

  vehicleMaintenanceByVehicleType2020$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByVehicleType2021$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByVehicleType2022$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByVehicleType2023$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByVehicleType2024$: Observable<Chart[]> = of([]);

  vehicleMaintenanceByMonth2020$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByMonth2021$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByMonth2022$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByMonth2023$: Observable<Chart[]> = of([]);
  vehicleMaintenanceByMonth2024$: Observable<Chart[]> = of([]);

  vehicleUsageByVehicleType2020$: Observable<Chart[]> = of([]);
  vehicleUsageByVehicleType2021$: Observable<Chart[]> = of([]);
  vehicleUsageByVehicleType2022$: Observable<Chart[]> = of([]);
  vehicleUsageByVehicleType2023$: Observable<Chart[]> = of([]);
  vehicleUsageByVehicleType2024$: Observable<Chart[]> = of([]);

  vehicleUsageByMonth2020$: Observable<Chart[]> = of([]);
  vehicleUsageByMonth2021$: Observable<Chart[]> = of([]);
  vehicleUsageByMonth2022$: Observable<Chart[]> = of([]);
  vehicleUsageByMonth2023$: Observable<Chart[]> = of([]);
  vehicleUsageByMonth2024$: Observable<Chart[]> = of([]);

  vehiclesWithMostMaintenance2024$: Observable<Chart[]> = of([]);
  vehicleWithMostUsage2024$: Observable<Chart[]> = of([]);

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    ////// Scorecard Reports //////

    this.totalMaintenancesByYear$ = this.service.getTotalMaintenance(
      this.date.getFullYear(),
    );

    this.totalMaintenancesByMonth$ = this.service.getTotalMaintenanceByMonth(
      this.date.getFullYear(),
      this.date.getMonth(),
    );

    this.vehicleWithMostMaintenances$ =
      this.service.getVehicleWithMostMaintenances(this.date.getFullYear());

    ////// Chart Reports //////
    this.getVehicleMaintenanceByVehicleType();
    this.getVehicleMaintenancesByMonth();
    this.getVehicleUsageByVehicleType();
    this.getVehicleUsageByMonth();
    this.getVehiclesWithMostMaintenances();
    this.getVehicleWithMostUsage();
  }

  getVehicleMaintenanceByVehicleType(): void {
    this.vehicleMaintenanceByVehicleType2020$ =
      this.service.getVehicleMaintenanceByVehicleType(2020);

    this.vehicleMaintenanceByVehicleType2021$ =
      this.service.getVehicleMaintenanceByVehicleType(2021);

    this.vehicleMaintenanceByVehicleType2022$ =
      this.service.getVehicleMaintenanceByVehicleType(2022);

    this.vehicleMaintenanceByVehicleType2023$ =
      this.service.getVehicleMaintenanceByVehicleType(2023);

    this.vehicleMaintenanceByVehicleType2024$ =
      this.service.getVehicleMaintenanceByVehicleType(2024);
  }

  getVehicleMaintenancesByMonth(): void {
    this.vehicleMaintenanceByMonth2020$ =
      this.service.getVehicleMaintenancesByMonth(2020);

    this.vehicleMaintenanceByMonth2021$ =
      this.service.getVehicleMaintenancesByMonth(2021);

    this.vehicleMaintenanceByMonth2022$ =
      this.service.getVehicleMaintenancesByMonth(2022);

    this.vehicleMaintenanceByMonth2023$ =
      this.service.getVehicleMaintenancesByMonth(2023);

    this.vehicleMaintenanceByMonth2024$ =
      this.service.getVehicleMaintenancesByMonth(2024);
  }

  getVehicleUsageByVehicleType(): void {
    this.vehicleUsageByVehicleType2020$ =
      this.service.getVehicleUsageByVehicleType(2020);

    this.vehicleUsageByVehicleType2021$ =
      this.service.getVehicleUsageByVehicleType(2021);

    this.vehicleUsageByVehicleType2022$ =
      this.service.getVehicleUsageByVehicleType(2022);

    this.vehicleUsageByVehicleType2023$ =
      this.service.getVehicleUsageByVehicleType(2023);

    this.vehicleUsageByVehicleType2024$ =
      this.service.getVehicleUsageByVehicleType(2024);
  }

  getVehicleUsageByMonth(): void {
    this.vehicleUsageByMonth2020$ = this.service.getVehicleUsageByMonth(2020);

    this.vehicleUsageByMonth2021$ = this.service.getVehicleUsageByMonth(2021);

    this.vehicleUsageByMonth2022$ = this.service.getVehicleUsageByMonth(2022);

    this.vehicleUsageByMonth2023$ = this.service.getVehicleUsageByMonth(2023);

    this.vehicleUsageByMonth2024$ = this.service.getVehicleUsageByMonth(2024);
  }

  getVehiclesWithMostMaintenances(): void {
    this.vehiclesWithMostMaintenance2024$ =
      this.service.getVehiclesWithMostMaintenances(2024);
  }

  getVehicleWithMostUsage(): void {
    this.vehicleWithMostUsage2024$ = this.service.getVehicleWithMostUsage(2024);
  }
}
