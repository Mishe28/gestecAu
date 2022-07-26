import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/adminlayout/adminlayout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/authlayout/authlayout/authlayout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/adminlayout/adminlayout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'gestec',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/authlayout/authlayout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ]
})
export class AppRoutingModule { }
