import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IImage, IProduct } from 'src/app/shared/models/products.model';


import { loadProducts } from 'src/app/main/pages/products/state/products.action';

import { ProductsState, selectProductsList } from 'src/app/main/pages/products/state/products.selectors';
import { MatTableDataSource } from '@angular/material/table';

interface ProductDataTable {
  name: string;
  images: IImage[];
  description: string;
}
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: IProduct[];
  dataSource!: MatTableDataSource<IProduct>;

  constructor(private store: Store<ProductsState> ) { }

  ngOnInit(): void {
    // TODO: Добавить отписку
    this.store.select(selectProductsList).subscribe( products => {
      this.products = products
    });
    // this.products.forEach()
    this.dataSource = new MatTableDataSource(this.products)
  }
  // TODO: https://blog.angular-university.io/angular-material-data-table/
  createDataTable(product: IProduct): ProductDataTable {
    return {
      name: product.name,
      images: product.images,
      description: product.description
    }
  }
}
