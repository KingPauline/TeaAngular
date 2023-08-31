import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccrodeonComponent} from "./components/accrodeon/accrodeon.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccordionModule, SharedModule} from "@coreui/angular";



@NgModule({
  declarations: [
    HeaderComponent,
    AccrodeonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    AccrodeonComponent
  ]
})
export class CustomSharedModule { }
