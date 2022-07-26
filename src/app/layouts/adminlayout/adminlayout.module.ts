import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './adminlayout-routing.module';
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
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherDistributiveComponent } from 'src/app/pages/teacher-distributive/teacher-distributive.component';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TagModule } from 'primeng/tag';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
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
    AssignmentComponent,
    FilterPipe,
    TeacherDistributiveComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    MessageModule,
    InputSwitchModule,
    TagModule,
    TableModule,
    PaginatorModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ]
})
export class AdminLayoutModule { }
