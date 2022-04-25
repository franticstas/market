import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductI } from '../shared/models/products.model';

export const selectProducts = createFeatureSelector<ReadonlyArray<ProductI>>('products')