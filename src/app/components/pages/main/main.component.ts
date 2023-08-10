import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private observable: Observable<boolean>;
  public popapShow: boolean = false;

  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(true)
      }, 10000)
    })
  }
  ngOnInit() {
    this.observable.subscribe((param: boolean) => {
      this.popapShow = param;
      console.log(this.popapShow)
    })
  }
  popapClose() {
    this.popapShow = false;
  }
}
