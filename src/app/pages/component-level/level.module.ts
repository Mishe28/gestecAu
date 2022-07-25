import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level/level.component';
import { LevelRoutingModule } from './level-routing.module';



@NgModule({
  declarations: [
    LevelComponent

  ],
  imports: [
    CommonModule,
    LevelRoutingModule  ]
})
export class LevelModule { }
