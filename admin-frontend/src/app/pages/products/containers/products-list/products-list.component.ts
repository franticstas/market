import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
    ProductsState,
    selectProductsList,
} from 'src/app/pages/products/store/selectors/products.selectors';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/types/products.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit, OnDestroy {
    products!: IProduct[];
    // dataSource: IProduct[] = [];
    subscription!: Subscription;
    productsList$ = this.store.select(selectProductsList);

    // columnsToDisplay: string[] = ['name', 'images', 'description'];

    constructor(private store: Store<ProductsState>) {}

    ngOnInit(): void {
        // this.subscription = this.store
        //     .select(selectProductsList)
        //     .subscribe((products) => (this.dataSource = products));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
