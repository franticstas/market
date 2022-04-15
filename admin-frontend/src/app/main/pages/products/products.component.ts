import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectProducts } from 'src/app/state/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select(selectProducts);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
