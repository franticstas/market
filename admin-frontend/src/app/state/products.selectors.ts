import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IProduct } from '../shared/models/products.model';
import { DataState } from './products.reducer';

// export interface AppState {
//     productsState: DataState
// }

// export const selectProductsState = createFeatureSelector<DataState>('productsState')

// export const selectProductsList = createSelector(
//     selectProductsState,
//     (state: DataState) => state.productsList
// )

export interface AppState {
    products: DataState;
  }

const selectProducts = (state: AppState) => state.products

export const selectProductsList = createSelector(
    selectProducts,
    (state: DataState) => state.productsList
)