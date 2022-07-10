import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatGridListModule

  ]
})
export class HomeModule { }
