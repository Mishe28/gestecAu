import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { CareerComponent } from './pages/component-career/career/career.component';
import { ClassroomComponent } from './pages/component-classroom/classroom/classroom.component';
import { CourseComponent } from './pages/component-course/course/course.component';
import { DayComponent } from './pages/component-day/day/day.component';
import { LevelComponent } from './pages/component-level/level/level.component';
import { ScheduleComponent } from './pages/component-schedule/schedule/schedule.component';
import { schoolYearComponent } from './pages/component-school-year/school-year/school-year.component';
import { StatusComponent } from './pages/component-status/status/status.component';
import { SubjectComponent } from './pages/component-subject/subject/subject.component';
import { TeacherComponent } from './pages/component-teacher/teacher/teacher.component';
import { UserComponent } from './pages/component-user/user/user.component';


const routes: Routes = [
  {path:'career', component: CareerComponent},
  {path:'teacher', component: TeacherComponent},
  {path:'course', component: CourseComponent},
  {path:'day', component: DayComponent},
  {path:'level', component: LevelComponent},
  {path:'schedule', component:ScheduleComponent},
  {path:'school-year', component:schoolYearComponent},
  {path:'status', component: StatusComponent},
  {path:'subject', component: SubjectComponent},
  {path:'user', component: UserComponent},
  {path:'classroom', component: ClassroomComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
