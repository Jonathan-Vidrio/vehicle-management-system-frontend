import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OlapService } from '../../services/olap.service';
import { Observable, of } from 'rxjs';
import { Department } from '../../../interfaces/department.interface';
import { GeneralService } from '../../services/general.service';
import { Vehicle } from '../../../interfaces/vehicle.interface';
import { TableComponent } from '../../components/table/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-olap',
  standalone: true,
  imports: [TableComponent, CommonModule, FormsModule],
  templateUrl: './olap.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OlapComponent {
  title: string = 'Face 1';
  headers: any[] = [];
  departments: Department[] = [];
  vehicles: Vehicle[] = [];
  data$: Observable<any[]> = of([]);

  years: number[] = [2024, 2023, 2022, 2021, 2020];

  selectedFace = 1;
  selectedYear = new Date().getFullYear();
  selectedDepartment = 1;
  selectedVehiclePlate = 'ADB001';

  vehicles$: Observable<Vehicle[]> = of([]);
  departments$: Observable<Department[]> = of([]);
  months: any[] = [];

  constructor(
    private service: OlapService,
    private generalService: GeneralService,
  ) {}

  ngOnInit(): void {
    this.loadInitialData();
    this.loadFaceData();
  }

  private loadInitialData(): void {
    this.vehicles$ = this.generalService.getVehicles();
    this.departments$ = this.generalService.getDepartments();
    this.months = [
      { monthId: 1, Name: 'January' },
      { monthId: 2, Name: 'February' },
      { monthId: 3, Name: 'March' },
      { monthId: 4, Name: 'April' },
      { monthId: 5, Name: 'May' },
      { monthId: 6, Name: 'June' },
      { monthId: 7, Name: 'July' },
      { monthId: 8, Name: 'August' },
      { monthId: 9, Name: 'September' },
      { monthId: 10, Name: 'October' },
      { monthId: 11, Name: 'November' },
      { monthId: 12, Name: 'December' },
    ];
  }

  private loadFaceData(): void {
    switch (this.selectedFace) {
      case 1:
        // title
        this.title = 'Face 1 - Vehicle Maintenances by Month and Department';

        // headers
        this.headers = ['Plates', ...this.months.map((month) => month.Name)];

        // options
        this.departments$.subscribe((departments) => {
          this.departments = departments;
        });

        // data
        this.data$ = this.service.getVehicleMaintenancesByMonthAndDepartment(
          this.selectedYear,
          this.selectedDepartment,
        );
        break;

      case 2:
        // title
        this.title = 'Face 2 - Department Maintenances by Month and Vehicle';

        // headers
        this.headers = [
          'Department',
          ...this.months.map((month) => month.Name),
        ];

        // options
        this.vehicles$.subscribe((vehicles) => {
          this.vehicles = vehicles;
        });

        this.data$ = this.service.getDepartmentMaintenancesByMonthAndVehicle$(
          this.selectedYear,
          this.selectedVehiclePlate,
        );
        break;

      case 3:
        // title
        this.title =
          'Face 3 - Maintenances in Month by Department and Vehicle Type';

        // headers
        this.headers = [
          'Month',
          'Sedan',
          'Coupe',
          'Hatchback',
          'Convertible',
          'SUV',
          'CrossOver',
          'Minivan',
          'Pickup',
          'Minibus',
          'Mindibus',
          'Full-size bus',
        ];

        // options
        this.departments$.subscribe((departments) => {
          this.departments = departments;
        });

        // data
        this.data$ =
          this.service.getMaintenancesInMonthByDepartmentAndVehicleType$(
            this.selectedYear,
            this.selectedDepartment,
          );
        break;
    }
  }

  onYearChange(year: any): void {
    this.selectedYear = year.target.value;
    this.loadFaceData();
  }

  onFaceChange(face: number): void {
    this.selectedFace = face;
    this.loadFaceData();
  }

  onOptionChange(option: any): void {
    switch (this.selectedFace) {
      case 1:
        this.selectedDepartment = option.target.value;
        break;

      case 2:
        this.selectedVehiclePlate = option.target.value;
        break;

      case 3:
        this.selectedDepartment = option.target.value;
        break;
    }

    this.loadFaceData();
  }
}
