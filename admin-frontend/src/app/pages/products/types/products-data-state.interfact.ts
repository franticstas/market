import { IProduct } from 'src/app/shared/types/products.interface'

export interface ProductsDataState {
    productsList: IProduct[]
    loadingProducts: boolean
    sendingProduct: boolean
    loadedProduct: IProduct | null
}
