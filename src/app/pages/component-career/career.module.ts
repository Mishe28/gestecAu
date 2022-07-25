import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career/career.component';
import { CareerRoutingModule } from './career-routing.module';



@NgModule({
  declarations: [
    CareerComponent

  ],
  imports: [
    CommonModule,
    CareerRoutingModule  ]
})
export class CareerModule { }
