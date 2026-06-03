"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
class CategoryService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createCategory(userId, category) {
        const ADMIN_ID = 1;
        if (userId !== ADMIN_ID) {
            const error = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.createCategory(category);
    }
    async getCategories(query, page, limit) {
        return await this.repository.findAll(query, page, limit);
    }
    async getCategoryById(id) {
        const category = await this.repository.findById(id);
        if (!category) {
            const error = new Error("Category not found");
            error.statusCode = 404;
            throw error;
        }
        return category;
    }
}
exports.CategoryService = CategoryService;
