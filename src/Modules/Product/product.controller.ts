import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import { GetProductsQueryDto } from "./product.schema";
import { AuthInterface } from "../Auth/Auth.schema";
import { setRedis, getRedis, deleteRedis, deleteRedisPattern } from "../Common/Services/redis.helper";


export class ProductController {
    constructor(private readonly service: ProductService) { }

    async createProduct(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const Data = req.body;

        const product = await this.service.createProduct(UserId, Data);

        await deleteRedisPattern("products:list:*");

        return res.status(201).json({
            status: "Success",
            Data: product,
            Message: "Product created successfully"
        });
    }

    async getProducts(req: Request, res: Response) {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const query = req.query as unknown as GetProductsQueryDto;

        const sortedQuery = Object.keys(req.query).sort().reduce((acc, key) => {
            acc[key] = req.query[key];
            return acc;
        }, {} as any);
        const cacheKey = `products:list:${JSON.stringify(sortedQuery)}`;

        const cachedData = await getRedis(cacheKey);
        if (cachedData) {
            return res.status(200).json({
                status: "Success",
                Data: cachedData,
                Message: "Products fetched successfully"
            });
        }

        const data = await this.service.getProducts(query, page, limit);

        if (!data) {
            const error: any = new Error("Products not found");
            error.statusCode = 404;
            throw error;
        }

        await setRedis(cacheKey, data, 3600);

        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Products fetched successfully"
        });
    }

    async getProductsById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const cacheKey = `products:item:${id}`;

        const cachedData = await getRedis(cacheKey);
        if (cachedData) {
            return res.status(200).json({
                status: "Success",
                Data: cachedData,
                Message: "Product fetched successfully"
            });
        }

        const data = await this.service.getProductById(id)

        if (!data) {
            const error: any = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }

        await setRedis(cacheKey, data, 3600);

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

        await deleteRedisPattern("products:list:*");
        await deleteRedis(`products:item:${productId}`);
        await deleteRedisPattern("pantry_items:*");

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

        await deleteRedisPattern("products:list:*");
        await deleteRedis(`products:item:${productId}`);
        await deleteRedisPattern("pantry_items:*");

        return res.status(200).json({
            status: "Success",
            Data: product,
            Message: "Product deleted successfully"
        });
    }
}