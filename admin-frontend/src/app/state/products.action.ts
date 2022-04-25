import { createAction, props } from '@ngrx/store';
import { ProductI } from '../shared/models/products.model';

export enum ProductActionTypes {
    Create = '[Product] Create Product',
    CreateSuccess = '[Product] Create Success',
    CreateFailure = '[Product] Create Failure '
}

export const createProduct = createAction(
    ProductActionTypes.Create,
    props<{ product: ProductI, files: Array<File> }>()
)

export const CreateSuccess = createAction(
    ProductActionTypes.CreateSuccess,
    props<{ product: ProductI}>()
)

export const CreateFailure = createAction(
    ProductActionTypes.CreateFailure
)