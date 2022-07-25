import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { SubjectRoutingModule } from './subject-routing.module';



@NgModule({
  declarations: [
    SubjectComponent

  ],
  imports: [
    CommonModule,
    SubjectRoutingModule  ]
})
export class SubjectModule { }
