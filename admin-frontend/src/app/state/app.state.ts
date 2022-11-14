import { IProduct } from '../shared/types/products.interface'

export interface AppState {
    products: ReadonlyArray<IProduct>
}
