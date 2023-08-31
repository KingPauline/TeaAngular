import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {HttpRequestsService} from "../../../shared/services/http-requests.service";
import {SearchService} from "../../../shared/services/search.service";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public title: string = ''
  public loading: boolean = false;
  public searchQuery: string | null = null;
  public searchFlag: boolean = false;
  public searchProduct: ProductType = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  }
  public products: ProductType[] = [{
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  }];

  constructor(private http: HttpClient, private productService: HttpRequestsService, private searchService: SearchService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.searchQuery = params['search'];
        console.log(this.searchQuery)
        if (this.searchQuery) {
          this.title = 'Результаты поиска по запросу ' + this.searchQuery;
          console.log(typeof this.searchQuery)
          this.searchService.getSearchProducts(this.searchQuery)
            .subscribe(
              {
                next: (data) => {
                  this.loading = false;
                  this.searchFlag = true;
                  console.log(Object.values(data));
                  //console.log(this.searchProduct);
                  if (data.length === 0) {
                    this.title = 'Ничего не найдено'
                    this.searchProduct = {
                      id: 0,
                      image: "../../../../assets/images/notFoundImage.png",
                      title: '',
                      price: 0,
                      description: ''
                    }
                  } else {
                    this.searchProduct = Object.values(data)[0];
                  }
                },
                error: (err: string) => {
                  console.log(err)
                  this.title = 'Ничего не найдено'
                }
              }
            )
        } else {
          this.title = 'Наша чайная коллекция'
          this.productService.getProducts()
            .subscribe(
              {
                next:
                  (data) => {
                    this.loading = false
                    this.products = data
                  },
              })
        }
      })
  }
}
