import { IProduct } from "../shared/models/products.model";
import { ITest } from "../shared/models/test.model";

export interface AppState {
    products: ReadonlyArray<IProduct>;
    test: ReadonlyArray<ITest>
}