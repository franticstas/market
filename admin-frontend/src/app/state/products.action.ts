import { createAction, props } from '@ngrx/store';
import { Product } from '../shared/models/products.model';

export const addProduct = createAction(
    '[Product List] Add Product',
    props<{ product: Product}>()
)

export const retrievedProductList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ products: ReadonlyArray<Product> }>()
  );