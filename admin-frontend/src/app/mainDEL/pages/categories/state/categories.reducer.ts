import { ICategory } from 'src/app/shared/types/categories.interface'

export interface CategoriesDataState {
    categoriesList: ICategory[]
    loadingCategories: boolean
    sendingCategory: boolean
    loadedCategory: ICategory | null
}

export const initialState: CategoriesDataState = {
    categoriesList: [],
    loadingCategories: false,
    sendingCategory: false,
    loadedCategory: null,
}
