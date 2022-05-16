import { Action, createReducer, on } from '@ngrx/store';
import { IProduct }  from 'src/app/shared/models/products.model'
import * as ProductAction from './products.action';

export interface ProductsDataState {
  productsList: IProduct[];
  loadingProducts: boolean;
  sendingProduct: boolean;
}

export const initialState: ProductsDataState = {
  productsList: [],
  loadingProducts: false,
  sendingProduct: false
}

const productsReducer = createReducer(
    initialState,
    on(ProductAction.loadProducts, (state) => ({...state, loadingProducts: true})),
    on(ProductAction.loadProductsSuccess, (state, { productsList }) => ({...state, productsList, loadingProducts: false})),
    on(ProductAction.loadProductsFailure, (state) => ({...state, loadingProducts: false})),
);

export function reducer(state: ProductsDataState | undefined, action: Action) {
  return productsReducer(state, action);
}