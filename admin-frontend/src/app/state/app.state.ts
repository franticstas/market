import { Product } from "../shared/models/products.model";

export interface AppState {
    products: ReadonlyArray<Product>
}