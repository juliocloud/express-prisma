import { ListProductUsecase } from "../../../../../usecases/list-product/list-product.usecase";
import { HttpMethod, Route } from "../route";

export type ListProductResponseDto = {
    products: {
        id: string;
        name: string;
        price: number;
    }[]
}

export class ListProductRoute implements Route {
    private constructor (
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly listProductService: ListProductUsecase
    ){}

    public static create(listProductService: ListProductUsecase){
        return new ListProductRoute(
            '/products',
            HttpMethod.GET,
            listProductService
        )

         
    }
}