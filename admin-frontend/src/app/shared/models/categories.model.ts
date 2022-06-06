import { IImage } from "./products.model";

interface ICategory {
    name: string,
    description: string,
    image: IImage,
    subCategoriesList: ISubCategory[]
}

interface ISubCategory {
    name: string,
    description: string,
    image: IImage
}

export {ICategory, ISubCategory}