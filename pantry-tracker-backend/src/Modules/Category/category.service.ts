import { CategoryRepository } from "./category.repository";
import { CreateCategoryDto, GetCategoriesQueryDto } from "./category.schema";

export class CategoryService {
    constructor(private repository: CategoryRepository) { }

    async createCategory(userId: number, category: CreateCategoryDto) {
        const ADMIN_ID = 1;
        if (userId !== ADMIN_ID) {
            const error: any = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.createCategory(category);
    }

    async getCategories(query: GetCategoriesQueryDto, page: number, limit: number) {
        return await this.repository.findAll(query, page, limit);
    }

    async getCategoryById(id: number) {
        const category = await this.repository.findById(id);
        if (!category) {
            const error: any = new Error("Category not found");
            error.statusCode = 404;
            throw error;
        }
        return category;
    }
}
