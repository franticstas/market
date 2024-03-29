import { IImage } from './products.interface';

interface ICategory {
    name: string;
    _id: string;
    description: string;
    image: IImage;
    subCategoriesList: ISubCategory[];
}

interface ISubCategory {
    name: string;
    description: string;
    image: IImage;
}

export { ICategory, ISubCategory };
