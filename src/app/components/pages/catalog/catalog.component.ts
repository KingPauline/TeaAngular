import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {HttpRequestsService} from "../../../services/http-requests.service";
import {SearchService} from "../../../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public title: string = ''
  public loading: boolean = false;
  private searchFlag: boolean = false;
  public products: ProductType[] = [{
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  }];

  constructor(private http: HttpClient, private productService: HttpRequestsService, private searchService: SearchService, private router: Router) {
  }

  ngOnInit() {
    this.loading = true;
    this.searchService.subject.subscribe({
      next: (querySearch) => {
        if (querySearch) {
          //this.router.navigate(['/catalog'])
          this.title = 'Результаты поиска по запросу ' + querySearch;
          this.productService.getSearchProducts(querySearch).subscribe(
            {
              next: (data) => {
                this.loading = false;
                this.searchFlag = true;
                this.products = data;
                if (data.length ===0) {
                  this.title = 'Ничего не найдено'
                }
              },
              error: (err: string) => {
                console.log(err)
                this.title = 'Ничего не найдено'
              }
            }
          )
        }
      },
    })
    if (!this.searchFlag) {
      this.title = 'Наша чайная коллекция'
      this.productService.getProducts()
        .subscribe(
          {
            next: (data) => {
              this.loading = false
              this.products = data
            },
          })
    }
  }
}
