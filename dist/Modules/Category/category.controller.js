"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
class CategoryController {
    service;
    constructor(service) {
        this.service = service;
    }
    async createCategory(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const Data = req.body;
        const category = await this.service.createCategory(UserId, Data);
        return res.status(201).json({
            status: "Success",
            Data: category,
            Message: "Category created successfully"
        });
    }
    async getCategories(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const query = req.query;
        const data = await this.service.getCategories(query, page, limit);
        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Categories fetched successfully"
        });
    }
    async getCategoryById(req, res) {
        const id = Number(req.params.id);
        const category = await this.service.getCategoryById(id);
        return res.status(200).json({
            status: "Success",
            Data: category,
            Message: "Category fetched successfully"
        });
    }
}
exports.CategoryController = CategoryController;
