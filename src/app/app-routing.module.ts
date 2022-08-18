import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/adminlayout/adminlayout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/authlayout/authlayout/authlayout.component';
import { CoordinatorlayoutComponent } from './layouts/coordinatorlayout/coordinatorlayout/coordinatorlayout.component';

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
    path: 'pages-c',
    component: CoordinatorlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/coordinatorlayout/coordinatorlayout.module').then(m => m.CoordinatorlayoutModule)
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
    component: NotFoundComponent
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
