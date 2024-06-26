import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { Department } from '../../interfaces/department.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  path = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.path}/vehicles`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.path}/departments`);
  }

  getVehicleTypes(): Observable<any> {
    return this.http.get<any>(`${this.path}/vehicle-types`);
  }

  getVehicleUsagePeak(year: number): Observable<any> {
    return this.http.get<any>(`${this.path}/vehicles/usage-peak/${year}`);
  }

  getFuelConsumption(year: number): Observable<any> {
    return this.http.get<any>(`${this.path}/vehicles/fuel-consumption/${year}`);
  }
}
