import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { NotFoundComponent } from 'src/app/auth/not-found/not-found.component';
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
