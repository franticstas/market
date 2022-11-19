import { createSelector } from '@ngrx/store';

import { ProductsDataState } from 'src/app/pages/products/types/products-data-state.interfact';

export interface ProductsState {
    products: ProductsDataState;
}

const selectProducts = (state: ProductsState) => state.products;

export const selectProductsList = createSelector(
    selectProducts,
    (state: ProductsDataState) => state.productsList
);

export const isLoadingProducts = createSelector(
    selectProducts,
    (state: ProductsDataState) => state.loadingProducts
);

export const isSendingProduct = createSelector(
    selectProducts,
    (state: ProductsDataState) => state.sendingProduct
);

export const selectLoadedProduct = createSelector(
    selectProducts,
    (state: ProductsDataState) => state.loadedProduct
);

export const selectCategoryList = createSelector(
    selectProducts,
    (state: ProductsDataState) => state.categoryList
);
