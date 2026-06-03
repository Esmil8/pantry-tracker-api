"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createProduct(userId, product) {
        const ADMIN_ID = 1;
        if (userId != ADMIN_ID) {
            const error = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.createProduct(product);
    }
    async getProducts(query, page, limit) {
        return await this.repository.getProducts(query, page, limit);
    }
    async getProductById(id) {
        return await this.repository.getProductById(id);
    }
    async updateProduct(userId, productId, product) {
        const ADMIN_ID = 1;
        if (userId != ADMIN_ID) {
            const error = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.updateProduct(productId, product);
    }
    async deleteProduct(userId, productId) {
        const ADMIN_ID = 1;
        if (userId != ADMIN_ID) {
            const error = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.deleteProduct(productId);
    }
}
exports.ProductService = ProductService;
