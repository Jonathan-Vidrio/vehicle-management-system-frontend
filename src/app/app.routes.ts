import { Routes } from '@angular/router';
import { VehicleListComponent } from './views/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './views/vehicle-add/vehicle-add.component';
import { VehicleDetailsComponent } from './views/vehicle-details/vehicle-details.component';
import { VehicleUpdateComponent } from './views/vehicle-update/vehicle-update.component';
import { VehicleReportsComponent } from './views/vehicle-reports/vehicle-reports.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OlapComponent } from './views/olap/olap.component';

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
        path: 'reports',
        component: VehicleReportsComponent,
      },
      {
        path: 'olap',
        component: OlapComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
