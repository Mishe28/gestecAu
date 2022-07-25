import { NgModule } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'course',component:CourseComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class CourseRoutingModule { }
