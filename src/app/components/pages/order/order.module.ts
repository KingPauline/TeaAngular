import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order.component";
import {HotToastModule} from "@ngneat/hot-toast";



@NgModule({
  imports: [
    CommonModule,
    HotToastModule.forRoot()
  ],
  declarations: [
    OrderComponent
  ],
  exports: [
    CommonModule, OrderComponent
  ]
})
export class OrderModule { }
