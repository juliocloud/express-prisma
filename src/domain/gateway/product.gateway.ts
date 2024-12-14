import { Product } from "../product/entity/product";

export interface ProductGateway{
    save(product: Product): Promise<void>;
    list(): Promise<Product[]>;
}