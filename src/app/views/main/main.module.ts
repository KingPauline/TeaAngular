import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main/main.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RouterModule} from "@angular/router";
import {CustomSharedModule} from "../../shared/customShared.module";




@NgModule({
  declarations: [
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    CustomSharedModule,
    MainRoutingModule,
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
