import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/shared/models/products.model';

import { ProductsState, selectProductsList } from 'src/app/main/pages/products/state/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: IProduct[];
  dataSource: IProduct[] = [];

  columnsToDisplay: string[] = ['name', 'images', 'description'];


  constructor(private store: Store<ProductsState> ) { }

  ngOnInit(): void {
    // TODO: Добавить отписку
    this.store.select(selectProductsList).subscribe( products => {
      this.dataSource = products;
    });
  }

}
