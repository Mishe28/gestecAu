import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';



const routes: Routes = [
  {path: 'subject',component:SubjectComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class SubjectRoutingModule { }
