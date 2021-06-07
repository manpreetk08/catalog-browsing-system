import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { BrowsingCategoryService } from 'src/app/services';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  browsingCategories: Array<string> = [];
  private _fetch = new Subject();
  private destroy$: Subject<boolean> = new Subject<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _browsecategoryService: BrowsingCategoryService
  ) {}

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
