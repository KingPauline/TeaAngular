import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search: string = ''
  public subject: Subject<string> = new Subject<string>()
  constructor() {

  }
  searchChange(param: string) {
    this.search = param;
    this.subject.next(this.search)
  }
}
