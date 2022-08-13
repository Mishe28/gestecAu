import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinateLayoutRoutes } from './coordinatorlayout-routing.module';
import { RouterModule } from '@angular/router';
import { SettingsCoordinatorComponent } from 'src/app/pages/settings-coordinator/settings-coordinator.component';
import { DashboardCoordinatorComponent } from 'src/app/pages/dashboard-coordinator/dashboard-coordinator.component';
import { ScheduleCoordinatorComponent } from 'src/app/pages/schedule-coordinator/schedule-coordinator.component';
import { RequestComponent } from 'src/app/pages/request/request.component';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    SettingsCoordinatorComponent,
    DashboardCoordinatorComponent,
    ScheduleCoordinatorComponent,
    RequestComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild(CoordinateLayoutRoutes),
  ]
})
export class CoordinatorlayoutModule { }
