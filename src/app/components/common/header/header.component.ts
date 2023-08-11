import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {SearchService} from "../../../services/search.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HotToastService} from "@ngneat/hot-toast";
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  public searchInfo: string = '';
  private subscription: Subscription | undefined;
  keyword: string | null = null;

  searchForm = this.fb.group({
    search: ['']
  });

  // searchForm: FormGroup = new FormGroup({
  //   search: new FormControl('')
  // })
  constructor(private searchService: SearchService, private  fb: FormBuilder, private toast: HotToastService, private router: Router) {
    this.keyword = '';
  }

  ngOnInit(): void {
    this.subscription = this.searchForm.get('search')?.valueChanges
      .subscribe({
        next: keyword => {
          this.keyword = keyword;
        },
        error: err=> {
          this.toast.error(err)
        }
      })
  }

  searchClick(keyword: string | null) {
    this.router.navigate(['catalog'], {
      queryParams: {search: keyword}
    })
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
