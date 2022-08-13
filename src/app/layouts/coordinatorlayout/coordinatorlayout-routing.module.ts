import { Routes } from '@angular/router';
import { DashboardCoordinatorComponent } from 'src/app/pages/dashboard-coordinator/dashboard-coordinator.component';
import { RequestComponent } from 'src/app/pages/request/request.component';
import { ScheduleCoordinatorComponent } from 'src/app/pages/schedule-coordinator/schedule-coordinator.component';
import { SettingsCoordinatorComponent } from 'src/app/pages/settings-coordinator/settings-coordinator.component';

export const CoordinateLayoutRoutes: Routes = [
  { path: 'request', component: RequestComponent },
  { path: 'settings', component: SettingsCoordinatorComponent },
  { path: 'dashboard', component: DashboardCoordinatorComponent },
  { path: 'schedule', component: ScheduleCoordinatorComponent },
];
