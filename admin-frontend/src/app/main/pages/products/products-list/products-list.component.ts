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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products!: IProduct[];
  dataSource2: IProduct[] = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private store: Store<ProductsState> ) { }

  ngOnInit(): void {
    // TODO: Добавить отписку
    this.store.select(selectProductsList).subscribe( products => {
      // this.products = products
      this.dataSource2 = products;
      console.log('****************************', this.dataSource2);
    });
    // this.products.forEach()
    // this.dataSource2 = new MatTableDataSource(this.products)
    console.log('****************************', this.dataSource);
    console.log('****************************', this.dataSource2);
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
