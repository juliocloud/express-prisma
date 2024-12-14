import { ApiExpress } from "./infra/api/express/api.express"
import { CreateProductRoute } from "./infra/api/express/routes/product/create-product.express.route"
import { ListProductRoute } from "./infra/api/express/routes/product/list-product.express.route"
import { ProductRepositoryPrisma } from "./infra/respositories/product/product.repository.prisma"
import { prisma } from "./package/prisma/prisma"
import { CreateProductUseCase } from "./usecases/create-product/create-product.usecase"
import { ListProductUsecase } from "./usecases/list-product/list-product.usecase"

const main = () => {
    const aRepo = ProductRepositoryPrisma.create(prisma)

    const createProductUsecase = CreateProductUseCase.create(aRepo)
    const listProductUsecase = ListProductUsecase.create(aRepo)

    const createRoute = CreateProductRoute.create(createProductUsecase)
    const listRoute = ListProductRoute.create(listProductUsecase)

    const port = 8000

    const api = ApiExpress.create([ createRoute, listRoute])

    api.start(port)
    
}

main()