import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinateLayoutRoutes } from './coordinatorlayout-routing.module';
import { RouterModule } from '@angular/router';
import { SettingsCoordinatorComponent } from 'src/app/pages/settings-coordinator/settings-coordinator.component';
import { DashboardCoordinatorComponent } from 'src/app/pages/dashboard-coordinator/dashboard-coordinator.component';
import { ScheduleCoordinatorComponent } from 'src/app/pages/schedule-coordinator/schedule-coordinator.component';
import { RequestComponent } from 'src/app/pages/request/request.component';


@NgModule({
  declarations: [
    SettingsCoordinatorComponent,
    DashboardCoordinatorComponent,
    ScheduleCoordinatorComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CoordinateLayoutRoutes),
  ]
})
export class CoordinatorlayoutModule { }
