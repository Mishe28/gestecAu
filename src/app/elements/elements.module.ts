import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class ElementsModule { }
