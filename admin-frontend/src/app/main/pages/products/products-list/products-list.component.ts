import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/products.model';


import { loadProducts } from 'src/app/main/pages/products/state/products.action';

import { ProductsState, selectProductsList } from 'src/app/main/pages/products/state/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<IProduct[]> = this.store.select(selectProductsList);

  constructor(private store: Store<ProductsState> ) { }

  ngOnInit(): void {
    
  }

  getProducts() {
    this.store.dispatch(loadProducts())
  }
}
