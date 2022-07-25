import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { schoolYearComponent } from './school-year/school-year.component';



const routes: Routes = [
  {path: 'school-year',component:schoolYearComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class schoolYearRoutingModule { }
