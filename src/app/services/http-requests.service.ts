import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormType} from "../types/form.type";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  public products: ProductType[] = [{
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  }]
  constructor(private http:HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return  this.http.get<ProductType[]>('https://testologia.site/tea')
  }

  createOrder(data: FormType) {
    return this.http.post<{success: number, message?:string}>('https://testologia.site/order-tea', data)
  }

  getSearchProducts(param:string): Observable<ProductType[]> {
    return  this.http.get<ProductType[]>( 'https://testologia.site/tea?search=' + param)
  }
}
