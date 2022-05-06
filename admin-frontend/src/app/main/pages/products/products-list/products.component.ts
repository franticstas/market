import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/shared/models/products.model';
import { loadProducts } from 'src/app/state/products.action';

import { selectProductsList } from 'src/app/state/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: IProduct[] = this.store.select(selectProductsList);

  constructor(private store: Store ) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.store.dispatch(loadProducts())
  }
}