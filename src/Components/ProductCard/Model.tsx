interface rating {
    rate: number;
    count: number
}

interface Product {
    image: string;
    price: number;
    title: string;
    description: string;
    category: string;
    rating: rating;
    id: number;

}

export interface ProductCardProps {
    to: string;
    onButtonClick: () => void;
    product: Product;
}