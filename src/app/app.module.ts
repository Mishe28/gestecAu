import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout/authlayout.component';
import { ElementsModule } from './elements/elements.module';
import { AdminLayoutComponent } from './layouts/adminlayout/adminlayout/admin-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElementsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
