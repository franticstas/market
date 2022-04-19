interface Product {
    id : string;
    name: string;
    price: number;
}

interface ProductCard {
    name: string;
    description: string;
    category: string;
    images: File;
}

export {Product, ProductCard}