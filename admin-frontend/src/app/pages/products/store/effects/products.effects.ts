import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { ProductsService } from 'src/app/shared/services/products.service';
import { IProduct } from 'src/app/shared/types/products.interface';
import { ProductActionTypes } from '../actions/products.action';

export type LoadProductByIdType = {
    id: string;
    type: ProductActionTypes.LoadById;
};

@Injectable()
export class ProductsEffects {
    createProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActionTypes.Create),
            mergeMap((data: { product: IProduct; files: Array<File> }) => {
                const imagesToUpload = data.files;

                const newCreatedProductFormData = new FormData();
                newCreatedProductFormData.append('name', data.product.name);
                newCreatedProductFormData.append(
                    'description',
                    data.product.description
                );
                newCreatedProductFormData.append(
                    'category',
                    data.product.category
                );
                newCreatedProductFormData.append(
                    'countInStock',
                    data.product.countInStock
                );

                for (let img of imagesToUpload) {
                    newCreatedProductFormData.append('product_images', img);
                }

                return this.productsService
                    .createProduct(newCreatedProductFormData)
                    .pipe(
                        map(() => ({ type: ProductActionTypes.CreateSuccess })),
                        catchError(() =>
                            of({ type: ProductActionTypes.CreateFailure })
                        )
                    );
            })
        )
    );

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActionTypes.Load),
            switchMap(() => {
                return this.productsService.loadProducts().pipe(
                    map((productsList) => ({
                        type: ProductActionTypes.LoadSuccess,
                        productsList,
                    })),
                    catchError((error) =>
                        of({ type: ProductActionTypes.LoadFailure })
                    )
                );
            })
        )
    );

    loadProductById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActionTypes.LoadById),
            switchMap((action: LoadProductByIdType) => {
                return this.productsService.loadProductById(action.id).pipe(
                    map((loadedProduct) => ({
                        type: ProductActionTypes.LoadByIdSuccess,
                        loadedProduct,
                    })),
                    catchError((error) =>
                        of({ type: ProductActionTypes.LoadByIdFailure })
                    )
                );
            })
        )
    );

    getCategoryList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActionTypes.GetCategoryList),
            switchMap(() => {
                return this.productsService.getCategoryList().pipe(
                    map((categoryList) => ({
                        type: ProductActionTypes.GetCategoryListSuccess,
                        categoryList,
                    })),
                    catchError((error) =>
                        of({ type: ProductActionTypes.GetCategoryListFailure })
                    )
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) {}
}
