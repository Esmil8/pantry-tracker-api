import { getLimit } from "../../Utils/Pagination.helper";
import { prisma } from "../../Shared/Databases/Prisma";
import { CreateCategoryDto, GetCategoriesQueryDto } from "./category.schema";

export class CategoryRepository {

    async createCategory(category: CreateCategoryDto) {
        return await prisma.category.create({
            data: category
        });
    }

    async findAll(query: GetCategoriesQueryDto, page: number, limit: number) {
        const { skip, limit: take } = getLimit(page, limit);
        return await prisma.category.findMany({
            where: {
                Name: query.name ? { contains: query.name } : undefined,
                Description: query.description ? { contains: query.description } : undefined,
            },
            take,
            skip,
        });
    }

    async findById(id: number) {
        return await prisma.category.findUnique({
            where: { Id: id }
        });
    }
}
