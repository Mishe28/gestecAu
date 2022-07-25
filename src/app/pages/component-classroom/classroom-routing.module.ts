import { NgModule } from '@angular/core';
import { ClassroomComponent } from './classroom/classroom.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'Classroom',component:ClassroomComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class ClassroomRoutingModule { }
