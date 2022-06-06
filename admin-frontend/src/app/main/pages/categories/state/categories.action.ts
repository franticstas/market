import { createAction, props } from "@ngrx/store";
import { ICategory } from "src/app/shared/models/categories.model";

export enum CategoriesActionTypes {
    Create = '[Categories] Create',
    CreateSuccess = '[Categories] Create Success',
    CreateFailure = '[Categories] Create Failure ',
    Load = '[Categories] Load Categories',
    LoadSuccess = '[Categories] Load Categories Success',
    LoadFailure = '[Categories] Load Categories Failure ',
    LoadById = '[Categories] Load Category By Id',
    LoadByIdSuccess = '[Categories] Load Category By Id Success',
    LoadByIdFailure = '[Categories] Load Category By Id Failure '
}

export const createCategory = createAction(
    CategoriesActionTypes.Create,
    props<{ product: ICategory, file: File }>()
)

export const createCategorySuccess = createAction(
    CategoriesActionTypes.CreateSuccess
)

export const createCategoryFailure = createAction(
    CategoriesActionTypes.CreateFailure
)

export const loadCategories = createAction(
    CategoriesActionTypes.Load
)

export const loadCategoriesSuccess = createAction(
    CategoriesActionTypes.LoadSuccess,
    props<{ productsList: ICategory[]}>()
)

export const loadCategoriesFailure = createAction(
    CategoriesActionTypes.LoadFailure
)

export const loadCategoryById = createAction(
    CategoriesActionTypes.LoadById,
    props<{id: string}>()
)

export const loadCategoryByIdSuccess = createAction(
    CategoriesActionTypes.LoadByIdSuccess,
    props<{ loadedProduct: ICategory}>()
)

export const loadCategoryByIdFailure = createAction(
    CategoriesActionTypes.LoadByIdFailure
)