import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/types/products.interface';

@Component({
    selector: 'app-products-list-table',
    templateUrl: './products-list-table.component.html',
    styleUrls: ['./products-list-table.component.scss'],
})
export class ProductsListTableComponent implements OnInit {
    columnsToDisplay: string[] = ['name', 'category', 'images', 'description'];

    @Input()
    productsList: IProduct[] | null = [];

    constructor() {}

    ngOnInit(): void {}
}
