import { Usecase } from "../../../../../usecases/usecase";
import { HttpMethod, Route } from "../route";

export type CreateProductResponseDto = {
    id: string;
}

export class CreateProductRoute implements Route {
    private constructor (
        private readonly path: string,
        private readonly method: HttpMethod,
        private readonly createProductService: Usecase
    )
}