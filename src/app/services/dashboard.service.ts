import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scorecard } from '../../interfaces/scorecard.interface';
import { Chart } from '../../interfaces/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  path = 'http://localhost:3000/api/v1/vehicles';

  constructor(private http: HttpClient) {}

  ////// Scorecard Reports //////

  getTotalMaintenance(year: number): Observable<Scorecard[]> {
    return this.http.get<Scorecard[]>(
      `${this.path}/total-maintenances-by-year/${year}`,
    );
  }

  getTotalMaintenanceByMonth(
    year: number,
    month: number,
  ): Observable<Scorecard[]> {
    return this.http.get<Scorecard[]>(
      `${this.path}/total-maintenances-by-month/${year}/${month}`,
    );
  }

  getVehicleWithMostMaintenances(year: number): Observable<Scorecard[]> {
    return this.http.get<Scorecard[]>(
      `${this.path}/vehicle-with-most-maintenances/${year}`,
    );
  }

  ////// Chart Reports //////

  getVehicleMaintenanceByVehicleType(year: number): Observable<Chart[]> {
    return this.http.get<Chart[]>(
      `${this.path}/vehicle-maintenance-by-vehicle-type/${year}`,
    );
  }

  getVehicleMaintenancesByMonth(year: number): Observable<Chart[]> {
    return this.http.get<Chart[]>(
      `${this.path}/vehicle-maintenances-by-month/${year}`,
    );
  }

  getVehiclesWithMostMaintenances(year: number): Observable<Chart[]> {
    return this.http.get<Chart[]>(
      `${this.path}/vehicles-with-most-maintenances/${year}`,
    );
  }

  getVehicleUsageByVehicleType(year: number): Observable<Chart[]> {
    return this.http.get<Chart[]>(
      `${this.path}/vehicle-usage-by-vehicle-type/${year}`,
    );
  }

  getVehicleUsageByMonth(year: number): Observable<Chart[]> {
    return this.http.get<Chart[]>(
      `${this.path}/vehicle-usage-by-month/${year}`,
    );
  }

  getVehicleWithMostUsage(year: number): Observable<Chart[]> {
    return this.http.get<Chart[]>(
      `${this.path}/vehicle-with-most-usage/${year}`,
    );
  }
}
