import { createReducer, on } from '@ngrx/store';
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

export const productsReducer = createReducer(
    initialState,
    on(ProductAction.loadProductsSuccess, (state, { productsList }) => {
      console.log(productsList);
      
     const t = {...state, productsList: productsList}
     return t
    })
  );