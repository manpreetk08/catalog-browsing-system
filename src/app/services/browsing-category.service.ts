import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrowsingCategoryService {
  constructor() {}

  getBrowseByCategoryList() {
    return of(['Apparels', 'Electronics', 'Footwear', 'Make Up']);
  }
}
