import { IProduct } from 'src/app/shared/types/products.model'

export interface AppState {
    products: ReadonlyArray<IProduct>
}
