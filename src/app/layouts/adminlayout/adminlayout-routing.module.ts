import { Routes } from '@angular/router';
import { CareerComponent } from 'src/app/pages/component-career/career/career.component';
import { ClassroomComponent } from 'src/app/pages/component-classroom/classroom/classroom.component';
import { CourseComponent } from 'src/app/pages/component-course/course/course.component';

export const AdminLayoutRoutes: Routes = [
    //{ path: 'dashboard',      component: DashboardComponent },
    //{ path: 'user-profile',   component: UserProfileComponent },
    { path: 'classroom',         component: ClassroomComponent },
    { path: 'career',          component: CareerComponent },
    { path: 'Course',           component: CourseComponent }
];

