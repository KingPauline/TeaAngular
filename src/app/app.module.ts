import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule, SharedModule } from '@coreui/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccrodeonComponent } from './components/common/accrodeon/accrodeon.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductComponent } from './components/pages/product/product.component';
import { OrderComponent } from './components/pages/order/order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HotToastModule} from "@ngneat/hot-toast";
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AccrodeonComponent,
    CatalogComponent,
    ProductComponent,
    OrderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
