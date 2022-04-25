import { createReducer, on } from '@ngrx/store';
import { ProductI }  from '../shared/models/products.model'
import * as ProductAction from './products.action';

export const initialState: ProductI[] = []

export const productsReducer = createReducer(
    initialState,
    on(ProductAction.createProduct, (state, product) => ({...state, product}))
  );