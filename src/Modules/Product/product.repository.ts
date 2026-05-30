import { getLimit } from "../../Shared/Pagination.helper";
import { prisma } from "../../Shared/Prisma"
import { CreateProductDto, GetProductsQueryDto, UpdateProductDto } from "./product.schema";

export class ProductRepository {

    async createProduct(product: CreateProductDto) {
        return await prisma.product.create({
            data: product
        })
    }

    async getProducts(query: GetProductsQueryDto, page: number, limit: number) {
        const { skip, limit: take } = getLimit(page, limit);
        return await prisma.product.findMany({
            where: {
                Name: query.name ? { contains: query.name } : undefined,
                Description: query.description ? { contains: query.description } : undefined,
                Brand: query.brand ? { contains: query.brand } : undefined,
                BarCode: query.barcode ? { contains: query.barcode } : undefined,
                CategoryId: query.categoryId ? { equals: query.categoryId } : undefined,
                UnitId: query.unitId ? { equals: query.unitId } : undefined,
            },
            include: {
                Category: true,
                Unit: true,
            },
            take,
            skip,
        });
    }

    async getProductById(id: number) {
        return await prisma.product.findUnique({
            where: { Id: id },
            include: {
                Category: true,
                Unit: true,
            },
        });
    }

    async updateProduct(id: number, product: UpdateProductDto) {
        return await prisma.product.update({
            where: { Id: id },
            data: product
        });
    }

    async deleteProduct(id: number) {
        return await prisma.product.delete({
            where: { Id: id }
        });
    }
}