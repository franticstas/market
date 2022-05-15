import { Action, createReducer, on } from '@ngrx/store';
import { IProduct }  from '../shared/models/products.model'
import * as ProductAction from './products.action';

export interface DataState {
  productsList: IProduct[];
  loadingProducts: boolean;
  sendingProduct: boolean;
}

export const initialState: DataState = {
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

export function reducer(state: DataState | undefined, action: Action) {
  return productsReducer(state, action);
}