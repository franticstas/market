import { Action, createReducer, on } from '@ngrx/store';

import { ProductsDataState } from 'src/app/pages/products/types/products-data-state.interfact';
import * as ProductAction from '../actions/products.action';

export const initialState: ProductsDataState = {
    productsList: [],
    loadingProducts: false,
    sendingProduct: false,
    loadedProduct: null,
    categoryList: [],
};

const productsReducer = createReducer(
    initialState,
    on(ProductAction.loadProducts, (state) => ({
        ...state,
        loadingProducts: true,
    })),
    on(ProductAction.loadProductsSuccess, (state, { productsList }) => ({
        ...state,
        productsList,
        loadingProducts: false,
    })),
    on(ProductAction.loadProductsFailure, (state) => ({
        ...state,
        loadingProducts: false,
    })),
    on(ProductAction.loadProductByIdSuccess, (state, { loadedProduct }) => ({
        ...state,
        loadedProduct,
    })),
    on(ProductAction.getCategoryListSuccess, (state, { categoryList }) => ({
        ...state,
        categoryList,
    }))
);

export function reducer(state: ProductsDataState | undefined, action: Action) {
    return productsReducer(state, action);
}
