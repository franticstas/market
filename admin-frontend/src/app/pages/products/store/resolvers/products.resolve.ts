import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { loadProducts } from '../actions/products.action';
import {
    isLoadingProducts,
    ProductsState,
} from '../selectors/products.selectors';

@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<boolean> {
    constructor(private store: Store<ProductsState>) {}

    resolve(): Observable<boolean> {
        this.store.dispatch(loadProducts());

        return this.store.pipe(
            select(isLoadingProducts),
            filter((loaded) => loaded === true),
            take(1)
        );
    }
}
