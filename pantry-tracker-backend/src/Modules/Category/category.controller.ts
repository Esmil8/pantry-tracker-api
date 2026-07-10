import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import { GetCategoriesQueryDto } from "./category.schema";
import { AuthInterface } from "../Auth/Auth.schema";

export class CategoryController {
    constructor(private readonly service: CategoryService) { }

    async createCategory(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const Data = req.body;

        const category = await this.service.createCategory(UserId, Data);

        return res.status(201).json({
            status: "Success",
            Data: category,
            Message: "Category created successfully"
        });
    }

    async getCategories(req: Request, res: Response) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const query = req.query as unknown as GetCategoriesQueryDto;
        const data = await this.service.getCategories(query, page, limit);

        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Categories fetched successfully"
        });
    }

    async getCategoryById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const category = await this.service.getCategoryById(id);

        return res.status(200).json({
            status: "Success",
            Data: category,
            Message: "Category fetched successfully"
        });
    }
}
