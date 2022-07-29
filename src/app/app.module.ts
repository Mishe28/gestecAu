import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/authlayout/authlayout/authlayout.component';
import { ElementsModule } from './elements/elements.module';
import { AdminLayoutComponent } from './layouts/adminlayout/adminlayout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { CoordinatorlayoutComponent } from './layouts/coordinatorlayout/coordinatorlayout/coordinatorlayout.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CoordinatorlayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ElementsModule,
    RouterModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
