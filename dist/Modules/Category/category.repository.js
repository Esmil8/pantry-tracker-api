"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const Pagination_helper_1 = require("../../Shared/Pagination.helper");
const Prisma_1 = require("../../Shared/Prisma");
class CategoryRepository {
    async createCategory(category) {
        return await Prisma_1.prisma.category.create({
            data: category
        });
    }
    async findAll(query, page, limit) {
        const { skip, limit: take } = (0, Pagination_helper_1.getLimit)(page, limit);
        return await Prisma_1.prisma.category.findMany({
            where: {
                Name: query.name ? { contains: query.name } : undefined,
                Description: query.description ? { contains: query.description } : undefined,
            },
            take,
            skip,
        });
    }
    async findById(id) {
        return await Prisma_1.prisma.category.findUnique({
            where: { Id: id }
        });
    }
}
exports.CategoryRepository = CategoryRepository;
