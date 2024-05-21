import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vehicle } from '../../../interfaces/vehicle';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsyncPipe, CommonModule } from '@angular/common';
import { GeneralService } from '../../services/general.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [RouterLink, NgxPaginationModule, AsyncPipe, CommonModule],
  templateUrl: './vehicle-list.component.html',
})
export class VehicleListComponent implements OnInit {
  vehicles$: Observable<Vehicle[]> = of([]);
  currentPage = 1;

  constructor(private service: GeneralService) {}

  ngOnInit(): void {
    this.vehicles$ = this.service.getVehicles();
  }

  setCurrentPage(event: number): void {
    this.currentPage = event;
  }
}
