import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { schoolYearComponent } from './school-year/school-year.component';
import { schoolYearRoutingModule } from './school-year-routing.module';

@NgModule({
  declarations: [
    schoolYearComponent

  ],
  imports: [
    CommonModule,
    schoolYearRoutingModule  ]
})
export class schoolYearModule { }
