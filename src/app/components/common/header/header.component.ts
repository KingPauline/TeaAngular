import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  public searchInfo: string = '';

  constructor(private searchService: SearchService) {

  }
  searchClick() {
    this.searchService.searchChange(this.searchInfo)
  }
}
