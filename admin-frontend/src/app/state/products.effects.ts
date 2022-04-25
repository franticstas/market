import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ProductsService } from "../shared/services/products.service";
import { ProductActionTypes } from './products.action'

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
                    map( product => ({type: ProductActionTypes.CreateSuccess, payload: product})),
                    catchError(() => of({ type: ProductActionTypes.CreateFailure}))
                )
        })
    ));

    constructor(
        private actions$: Actions,
        private productsService: ProductsService
      ) {}
}