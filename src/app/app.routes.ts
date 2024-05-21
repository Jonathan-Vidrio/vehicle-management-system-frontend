import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './components/vehicle-add/vehicle-add.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleUpdateComponent } from './components/vehicle-update/vehicle-update.component';
import { VehicleDashboardComponent } from './components/vehicle-dashboard/vehicle-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full',
  },
  {
    path: 'vehicles',
    children: [
      {
        path: '',
        component: VehicleListComponent,
      },
      {
        path: 'new',
        component: VehicleAddComponent,
      },
      {
        path: 'details/:id',
        component: VehicleDetailsComponent,
      },
      {
        path: 'update/:id',
        component: VehicleUpdateComponent,
      },
      {
        path: 'dashboard',
        component: VehicleDashboardComponent,
      },
    ],
  },
];
