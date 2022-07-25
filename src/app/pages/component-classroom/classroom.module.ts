import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomRoutingModule } from './classroom-routing.module';



@NgModule({
  declarations: [
    ClassroomComponent

  ],
  imports: [
    CommonModule,
    ClassroomRoutingModule  ]
})
export class ClassroomModule { }
