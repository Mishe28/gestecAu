import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LevelComponent } from './level/level.component';



const routes: Routes = [
  {path: 'level',component:LevelComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class LevelRoutingModule { }
