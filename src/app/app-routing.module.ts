import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./views/main/main/main.component";
import {NotFoundComponent} from "./views/main/not-found/not-found.component";
import {CatalogComponent} from "./views/products/catalog/catalog.component";
import {ProductComponent} from "./views/products/product/product.component";
import {OrderComponent} from "./views/order/order.component";


const routes: Routes = [
  {path :'', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: ProductComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
