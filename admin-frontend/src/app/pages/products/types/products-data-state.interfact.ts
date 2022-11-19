import { ICategory } from 'src/app/shared/types/categories.interface';
import { IProduct } from 'src/app/shared/types/products.interface';

export interface ProductsDataState {
    productsList: IProduct[];
    loadingProducts: boolean;
    sendingProduct: boolean;
    loadedProduct: IProduct | null;
    categoryList: ICategory[];
}
