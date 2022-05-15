import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/products.model';
import { ITest } from 'src/app/shared/models/test.model';

import { loadProducts } from 'src/app/state/products.action';

import { AppState, selectProductsList } from 'src/app/state/products.selectors';
import { selectTestCount } from '../state/test.selector';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<IProduct[]> = this.store.select(selectProductsList);
  //count$: Observable<number> = this.store.select(selectTestCount)

  constructor(private store: Store<AppState> ) { }

  ngOnInit(): void {
    
  }

  getProducts() {
    this.store.dispatch(loadProducts())
  }

  // getSelect() {
  //   this.store
  //     .pipe(select(selectProductsList))
  //     .subscribe((t) => console.log(t))
  // }
}
