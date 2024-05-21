import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-vehicle-dashboard',
  standalone: true,
  imports: [
    NgApexchartsModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    RouterLink,
    NgClass,
  ],
  templateUrl: './vehicle-dashboard.component.html',
})
export class VehicleDashboardComponent implements OnInit {
  vehicles$: Observable<any> = of([]);
  dropdownOpenVehicleUsage = false;
  selectedValueVehicleUsage = '2024';
  currentPageVehicleUsage = 1;

  fuelConsumption$: Observable<any> = of([]);
  dropdownOpenFuelConsumption = false;
  selectedValueFuelConsumption = '2024';
  currentPageFuelConsumption = 1;

  constructor(private service: GeneralService) {}

  ngOnInit(): void {
    this.vehicles$ = this.service.getVehicleUsagePeak(2020);
    this.fuelConsumption$ = this.service.getFuelConsumption(2020);
  }

  // Vehicle Usage

  setCurrentPageVehicleUsage(event: number): void {
    this.currentPageVehicleUsage = event;
  }

  toggleDropdownVehicleUsage() {
    this.dropdownOpenVehicleUsage = !this.dropdownOpenVehicleUsage;
    console.log(this.dropdownOpenVehicleUsage);
  }

  selectValueVehicleUsage(value: string) {
    this.selectedValueVehicleUsage = value;
    this.vehicles$ = this.service.getVehicleUsagePeak(+value);
    this.toggleDropdownVehicleUsage();
  }

  // Fuel Consumption

  setCurrentPageFuelConsumption(event: number): void {
    this.currentPageFuelConsumption = event;
  }

  toggleDropdownFuelConsumption() {
    this.dropdownOpenFuelConsumption = !this.dropdownOpenFuelConsumption;
    console.log(this.dropdownOpenFuelConsumption);
  }

  selectValueFuelConsumption(value: string) {
    this.selectedValueFuelConsumption = value;
    this.fuelConsumption$ = this.service.getFuelConsumption(+value);
    this.toggleDropdownFuelConsumption();
  }
}
