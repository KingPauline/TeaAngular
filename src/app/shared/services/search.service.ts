import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search: string = ''
  public subject: Subject<string> = new Subject<string>()
  constructor(private http: HttpClient) {

  }
  getSearchProducts(param:string): Observable<ProductType[]> {
    return  this.http.get<ProductType[]>( 'https://testologia.site/tea?search=' + param)
  }
}
