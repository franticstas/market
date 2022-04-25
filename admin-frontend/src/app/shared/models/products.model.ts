interface ImageI {
    image: {
        originalname: string,
        path: string
    },
    _id: string
}

interface ProductI {
    _id?: string;
    name: string;
    description: string;
    category: string;
    images: ImageI[];
    price?: number;
}


export {ProductI}