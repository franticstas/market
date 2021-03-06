import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { ProductsService } from "src/app/shared/services/products.service";
import { ProductActionTypes } from './products.action'

export type LoadProductByIdType = {id: string, type: ProductActionTypes.LoadById }

@Injectable()
export class ProductsEffects {

    createProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.Create),
        mergeMap((product: any) => {

            const imagesToUpload = product.files;

            const newCreatedProductFormData = new FormData();
            newCreatedProductFormData.append('name', product.name);
            newCreatedProductFormData.append('description', product.description)
            newCreatedProductFormData.append('category', product.category)

            for(let img of imagesToUpload){
                newCreatedProductFormData.append('product_images',img);
            }
            
            return this.productsService.createProduct(newCreatedProductFormData)
                .pipe(
                    map(() => ({type: ProductActionTypes.CreateSuccess})),
                    catchError(() => of({ type: ProductActionTypes.CreateFailure}))
                )
        })
    ));

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.Load),
        switchMap(() => {
            return this.productsService.loadProducts().pipe(
                map((productsList) => ({type: ProductActionTypes.LoadSuccess, productsList})),
                catchError(error => of({ type: ProductActionTypes.LoadFailure}))
            )
        })
    ));

    loadProductById$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActionTypes.LoadById),
        switchMap((action: LoadProductByIdType) => {
            return this.productsService.loadProductById(action.id).pipe(
                map((loadedProduct) => ({type: ProductActionTypes.LoadByIdSuccess, loadedProduct})),
                catchError(error => of({type: ProductActionTypes.LoadByIdFailure}))
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) {}
}