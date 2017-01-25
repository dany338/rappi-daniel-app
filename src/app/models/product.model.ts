import { Category } from './category.model';

export class Product {
    id: number;
    price: string;
    available: boolean;
    best_seller: boolean;
    categories: Array<Category> = new Array<Category>();
    img: string;
    description: string;
}