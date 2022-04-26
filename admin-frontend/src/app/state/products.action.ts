import { createAction, props } from '@ngrx/store';
import { IProduct } from '../shared/models/products.model';

export enum ProductActionTypes {
    Create = '[Product] Create',
    CreateSuccess = '[Product] Create Success',
    CreateFailure = '[Product] Create Failure ',
    Load = '[Product] Load Product',
    LoadSuccess = '[Product] Create Success',
    LoadFailure = '[Product] Create Failure '
}

export const createProduct = createAction(
    ProductActionTypes.Create,
    props<{ product: IProduct, files: Array<File> }>()
)

export const createProductSuccess = createAction(
    ProductActionTypes.CreateSuccess
)

export const createProductFailure = createAction(
    ProductActionTypes.CreateFailure
)

export const loadProducts = createAction(
    ProductActionTypes.Load
)

export const loadProductsSuccess = createAction(
    ProductActionTypes.LoadSuccess,
    props<{ productsList: IProduct[]}>()
)

export const loadProductsFailure = createAction(
    ProductActionTypes.LoadFailure
)