import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../shared/models/products.model';

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products')