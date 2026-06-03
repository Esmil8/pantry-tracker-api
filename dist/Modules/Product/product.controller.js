"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    service;
    constructor(service) {
        this.service = service;
    }
    async createProduct(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const Data = req.body;
        const product = await this.service.createProduct(UserId, Data);
        return res.status(201).json({
            status: "Success",
            Data: product,
            Message: "Product created successfully"
        });
    }
    async getProducts(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const query = req.query;
        const data = await this.service.getProducts(query, page, limit);
        if (!data) {
            const error = new Error("Products not found");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Products fetched successfully"
        });
    }
    async getProductsById(req, res) {
        const data = await this.service.getProductById(Number(req.params.id));
        if (!data) {
            const error = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Product fetched successfully"
        });
    }
    async updateProduct(req, res) {
        const { user } = req;
        const userId = Number(user?.id);
        const productId = Number(req.params.id);
        const Data = req.body;
        const product = await this.service.updateProduct(userId, productId, Data);
        return res.status(200).json({
            status: "Success",
            Data: product,
            Message: "Product updated successfully"
        });
    }
    async deleteProduct(req, res) {
        const { user } = req;
        const userId = Number(user?.id);
        const productId = Number(req.params.id);
        const product = await this.service.deleteProduct(userId, productId);
        return res.status(200).json({
            status: "Success",
            Data: product,
            Message: "Product deleted successfully"
        });
    }
}
exports.ProductController = ProductController;
