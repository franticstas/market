import { IProduct } from "src/app/shared/models/products.model";

export interface AppState {
    products: ReadonlyArray<IProduct>
}