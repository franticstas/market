import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/shared/types/products.interface'

export enum ProductActionTypes {
    Create = '[Product] Create',
    CreateSuccess = '[Product] Create Success',
    CreateFailure = '[Product] Create Failure ',
    Load = '[Product] Load Products',
    LoadSuccess = '[Product] Load Products Success',
    LoadFailure = '[Product] Load Products Failure ',
    LoadById = '[Product] Load Product By Id',
    LoadByIdSuccess = '[Product] Load Product By Id Success',
    LoadByIdFailure = '[Product] Load Product By Id Failure ',
}

export const createProduct = createAction(
    ProductActionTypes.Create,
    props<{ product: IProduct; files: Array<File> }>()
)

export const createProductSuccess = createAction(
    ProductActionTypes.CreateSuccess
)

export const createProductFailure = createAction(
    ProductActionTypes.CreateFailure
)

export const loadProducts = createAction(ProductActionTypes.Load)

export const loadProductsSuccess = createAction(
    ProductActionTypes.LoadSuccess,
    props<{ productsList: IProduct[] }>()
)

export const loadProductsFailure = createAction(ProductActionTypes.LoadFailure)

export const loadProductById = createAction(
    ProductActionTypes.LoadById,
    props<{ id: string }>()
)

export const loadProductByIdSuccess = createAction(
    ProductActionTypes.LoadByIdSuccess,
    props<{ loadedProduct: IProduct }>()
)

export const loadProductByIdFailure = createAction(
    ProductActionTypes.LoadByIdFailure
)
