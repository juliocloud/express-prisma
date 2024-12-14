import { ProductGateway } from "../../domain/gateway/product.gateway"
import { Product, ProductProps } from "../../domain/product/entity/product"
import { Usecase } from "../usecase"

export type ListProductInputDto = void 

export type ListProductOutpuDto = {
    products: ProductProps[]
}

export class ListProductUsecase 
    implements Usecase<ListProductInputDto, ListProductOutpuDto> {
    
    private constructor(private readonly productGateway: ProductGateway){
        return new ListProductUsecase(productGateway)
    }

    public static create(productGateway: ProductGateway){
        return new ListProductUsecase(productGateway)
    }

    public async execute(): Promise<ListProductOutpuDto> {
        const aProducts = await this.productGateway.list();

        const output = this.presentOutput(aProducts)

        return output;
    }

    private presentOutput(products: Product[]): ListProductOutpuDto {
        return {
            products: products.map((p) => {
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    quantity: p.quantity
                }
            })
        }
    }

}