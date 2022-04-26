import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/shared/services/products.service';

import { selectProducts } from 'src/app/state/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select(selectProducts);

  constructor(private store: Store, private productsService: ProductsService ) { }

  ngOnInit(): void {
  }

  getProducts() {
    this.productsService.loadProducts().subscribe()
  }
}
