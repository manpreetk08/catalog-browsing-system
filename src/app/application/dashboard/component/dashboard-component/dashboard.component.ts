import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { BrowsingCategoryService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  browsingCategories: Array<string> = [];
  private _fetch = new Subject();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private _browsecategoryService: BrowsingCategoryService) {}

  ngOnInit(): void {
    this._getBrowsingCategoryList();
    this._emit();
  }

  private _getBrowsingCategoryList() {
    this._fetch
      .pipe(
        takeUntil(this.destroy$),
        switchMap((_) => this._browsecategoryService.getBrowseByCategoryList())
      )
      .subscribe((response: any) => {
        this.browsingCategories = response;
      });
  }

  private _emit() {
    this._fetch.next();
  }
}
