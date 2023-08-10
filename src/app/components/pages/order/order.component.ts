import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CartService} from "../../../services/cart.service";
import {HttpRequestsService} from "../../../services/http-requests.service";
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public formShow: boolean = true;
  public successShow: boolean = false;
  public unsuccessShow: boolean = false;
  public loading: boolean = false;
  public btnDisabled: boolean = false;
  constructor(private fb: FormBuilder, private cartService: CartService, private httpService: HttpRequestsService, private router: Router, private toast: HotToastService) {
  }
  orderForm = this.fb.group({
    product: [this.cartService.product, [Validators.required]],
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    surname: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я]+$')]],
    telephone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    address: ['', [Validators.required, Validators.pattern('^[a-zA-ZА-Я-а-я0-9\\s\\-\\\\]+$')]],
    comment: ['']
  })

  get name() {
    return this.orderForm.get('name')
  }
  get surname() {
    return this.orderForm.get('surname')
  }
  get telephone() {
    return this.orderForm.get('telephone')
  }
  get country() {
    return this.orderForm.get('country')
  }
  get zip() {
    return this.orderForm.get('zip')
  }
  get address() {
    return this.orderForm.get('address')
  }

  createOrder() {
    this.loading = true;
    // this.toast.info("Заказ создан")
    this.httpService.createOrder({
      name: this.orderForm.get('name')?.value as string,
      last_name: this.orderForm.get('surname')?.value as string,
      phone: this.orderForm.get('telephone')?.value as string,
      country: this.orderForm.get('country')?.value as string,
      zip: this.orderForm.get('zip')?.value as string,
      product: this.orderForm.get('product')?.value as string,
      address: this.orderForm.get('address')?.value as string,
      comment: this.orderForm.get('comment')?.value as string
    })
      .subscribe(response => {
        this.loading = false;
        if (response.success && !response.message) {
          this.formShow = false;
          this.successShow = true;
          alert('Спасибо за заказ')
          this.toast.info("Спасибо за заказ")
          this.router.navigate(['/catalog']);


        } else {
          this.unsuccessShow = true;
          this.toast.info("Произошла ошибка")
          alert('Произошла ошибка')
          this.router.navigate(['/catalog']);
          setTimeout(() => {
            this.unsuccessShow = false;
          }, 3000)

        }
      })
  }
}
