import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './authlayout-routing.module';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { NotFoundComponent } from 'src/app/auth/not-found/not-found.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent
  ]
})
export class AuthLayoutModule { }