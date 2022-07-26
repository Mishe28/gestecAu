import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { NotFoundComponent } from 'src/app/auth/not-found/not-found.component';

export const AuthLayoutRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
];
