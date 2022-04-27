interface IImage {
    image: {
        originalname: string,
        path: string
    },
    _id: string
}

interface IProduct {
    _id: string;
    name: string;
    description: string;
    category: string;
    images: IImage[];
    price?: number;
}


export {IProduct}