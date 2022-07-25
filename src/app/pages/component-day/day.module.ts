import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './day/day.component';
import { DayRoutingModule } from './day-routing.module';



@NgModule({
  declarations: [
    DayComponent

  ],
  imports: [
    CommonModule,
    DayRoutingModule  ]
})
export class DayModule { }
