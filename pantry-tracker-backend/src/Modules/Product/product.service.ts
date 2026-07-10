import { ProductRepository } from "./product.repository";
import { CreateProductDto, GetProductsQueryDto, UpdateProductDto } from "./product.schema";


export class ProductService {
    constructor(private repository: ProductRepository) { }

    async createProduct(userId: number, product: CreateProductDto) {
        const ADMIN_ID = 1
        if (userId != ADMIN_ID) {
            const error: any = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.createProduct(product);
    }

    async getProducts(query: GetProductsQueryDto, page: number, limit: number) {
        return await this.repository.getProducts(query, page, limit);
    }

    async getProductById(id: number) {
        return await this.repository.getProductById(id);
    }

    async updateProduct(userId: number, productId: number, product: UpdateProductDto) {
        const ADMIN_ID = 1
        if (userId != ADMIN_ID) {
            const error: any = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.updateProduct(productId, product);
    }

    async deleteProduct(userId: number, productId: number) {

        const ADMIN_ID = 1
        if (userId != ADMIN_ID) {
            const error: any = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.deleteProduct(productId);
    }
}