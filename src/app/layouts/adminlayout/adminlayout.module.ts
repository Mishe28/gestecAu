import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './adminlayout-routing.module';
import { Subject } from 'rxjs';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { CareerComponent } from 'src/app/pages/career/career.component';
import { CourseComponent } from 'src/app/pages/course/course.component';
import { DayComponent } from 'src/app/pages/day/day.component';
import { TeacherComponent } from 'src/app/pages/teacher/teacher.component';
import { ClassroomComponent } from 'src/app/pages/classroom/classroom.component';
import { LevelComponent } from 'src/app/pages/level/level.component';
import { ScheduleComponent } from 'src/app/pages/schedule/schedule.component';
import { schoolYearComponent } from 'src/app/pages/school-year/school-year.component';
import { StatusComponent } from 'src/app/pages/status/status.component';
import { SubjectComponent } from 'src/app/pages/subject/subject.component';
import { UserComponent } from 'src/app/pages/user/user.component';
import { AssignmentComponent } from 'src/app/pages/assignment/assignment.component';


@NgModule({
  declarations: [
    CareerComponent,
    CourseComponent,
    DayComponent,
    TeacherComponent,
    ClassroomComponent,
    LevelComponent,
    ScheduleComponent,
    schoolYearComponent,
    StatusComponent,
    SubjectComponent,
    UserComponent,
    DashboardComponent,
    SettingsComponent,
    UserProfileComponent,
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ]
})
export class AdminLayoutModule { }
