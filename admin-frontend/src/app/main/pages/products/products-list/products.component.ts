import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/state/products.action';

import { selectProducts } from 'src/app/state/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$ = this.store.select(selectProducts);

  constructor(private store: Store ) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.store.dispatch(loadProducts())
  }
}
