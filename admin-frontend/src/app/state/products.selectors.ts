import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IProduct } from '../shared/models/products.model';

export const selectProducts = createFeatureSelector<ReadonlyArray<IProduct>>('products')