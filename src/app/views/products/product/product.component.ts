import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {HttpRequestsService} from "../../../shared/services/http-requests.service";
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public loading: boolean = false;
  public product: ProductType = {
    id: 0,
    image: '',
    title: '',
    price: 0,
    description: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private productService: HttpRequestsService, private cartService: CartService) {

  }
  addToCart(title: string) {
    this.cartService.product = title;
    console.log(title)
  }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProducts()
          .subscribe({
              next: (data) => {
                this.loading = false;
                console.log(params['id'])
                this.product = data.find(item => (item.id === +params['id']))!
                console.log(this.product)
              },
              error: err => {
                console.log(err)
              }
            }
          )
      }
    })

  }

}
