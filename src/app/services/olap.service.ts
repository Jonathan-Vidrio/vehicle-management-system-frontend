import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Face1 } from '../../interfaces/olap/face-1.interface';
import { Face2 } from '../../interfaces/olap/face-2.interface';
import { Face3 } from '../../interfaces/olap/face-3.interface';

@Injectable({
  providedIn: 'root',
})
export class OlapService {
  path = 'http://localhost:3000/api/v1/vehicles';

  constructor(private http: HttpClient) {}

  getVehicleMaintenancesByMonthAndDepartment(
    year: number,
    departmentId: number,
  ): Observable<Face1[]> {
    return this.http.get<Face1[]>(
      `${this.path}/vehicle-maintenances-by-month-and-department/year/${year}/departmentId/${departmentId}`,
    );
  }

  getDepartmentMaintenancesByMonthAndVehicle$(
    year: number,
    vehiclePlates: string,
  ): Observable<Face2[]> {
    return this.http.get<Face2[]>(
      `${this.path}/department-maintenances-by-month-and-vehicle/year/${year}/vehiclePlates/${vehiclePlates}`,
    );
  }

  getMaintenancesInMonthByDepartmentAndVehicleType$(
    year: number,
    departmentId: number,
  ): Observable<Face3[]> {
    return this.http.get<Face3[]>(
      `${this.path}/maintenances-in-month-by-department-and-vehicle-type/year/${year}/departmentId/${departmentId}`,
    );
  }
}
