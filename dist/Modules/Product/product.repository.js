"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const Pagination_helper_1 = require("../../Shared/Pagination.helper");
const Prisma_1 = require("../../Shared/Prisma");
class ProductRepository {
    async createProduct(product) {
        return await Prisma_1.prisma.product.create({
            data: product
        });
    }
    async getProducts(query, page, limit) {
        const { skip, limit: take } = (0, Pagination_helper_1.getLimit)(page, limit);
        return await Prisma_1.prisma.product.findMany({
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
    async getProductById(id) {
        return await Prisma_1.prisma.product.findUnique({
            where: { Id: id },
            include: {
                Category: true,
                Unit: true,
            },
        });
    }
    async updateProduct(id, product) {
        return await Prisma_1.prisma.product.update({
            where: { Id: id },
            data: product
        });
    }
    async deleteProduct(id) {
        return await Prisma_1.prisma.product.delete({
            where: { Id: id }
        });
    }
}
exports.ProductRepository = ProductRepository;
