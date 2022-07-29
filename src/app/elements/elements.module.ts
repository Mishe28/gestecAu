import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Sidebar1Component } from './sidebar1/sidebar1/sidebar1.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    Sidebar1Component,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    Sidebar1Component
  ]
})
export class ElementsModule { }
