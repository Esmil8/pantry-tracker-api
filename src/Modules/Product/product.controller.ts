import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import { GetProductsQueryDto } from "./product.schema";
import { AuthInterface } from "../Auth/Auth.schema";


export class ProductController {
    constructor(private readonly service: ProductService) { }

    async createProduct(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const Data = req.body;

        const product = await this.service.createProduct(UserId, Data);

        return res.status(201).json({
            status: "Success",
            Data: product,
            Message: "Product created successfully"
        });
    }

    async getProducts(req: Request, res: Response) {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const query = req.query as unknown as GetProductsQueryDto;
        const data = await this.service.getProducts(query, page, limit);

        if (!data) {
            const error: any = new Error("Products not found");
            error.statusCode = 404;
            throw error;
        }

        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Products fetched successfully"
        });
    }

    async getProductsById(req: Request, res: Response) {

        const data = await this.service.getProductById(Number(req.params.id))

        if (!data) {
            const error: any = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }

        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Product fetched successfully"
        })
    }

    async updateProduct(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const userId = Number(user?.id);
        const productId = Number(req.params.id);
        const Data = req.body;

        const product = await this.service.updateProduct(userId, productId, Data);
        return res.status(200).json({
            status: "Success",
            Data: product,
            Message: "Product updated successfully"
        })
    }

    async deleteProduct(req: Request, res: Response) {
        const { user } = req as AuthInterface;
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