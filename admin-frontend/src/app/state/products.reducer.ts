import { createReducer, on } from '@ngrx/store';
import { Product }  from '../shared/models/products.model'
import { addProduct, retrievedProductList } from './products.action';

export const initialState: ReadonlyArray<Product> = [
    {
        id: '35353',
        name: 'Test',
        price: 33
    }
]

export const productsReducer = createReducer(
    initialState,
    on(addProduct, (state, product) => ({...state, product})),
    on(retrievedProductList, (state, { products }) => products)
  );