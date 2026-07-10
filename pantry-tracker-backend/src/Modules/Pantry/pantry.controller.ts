import { PantryService } from "./pantry.service";
import { Request, Response } from "express";
import { PantryQueryDto } from './pantry.schema';
import { AuthInterface } from '../Auth/Auth.schema';
import { setRedis, getRedis, deleteRedis, deleteRedisPattern } from "../Common/Services/redis.helper";

export class PantryController {

    constructor(private pantryService: PantryService) { }

    async CreatePantry(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const Data = req.body;

        await this.pantryService.createPantry(UserId, Data);

        await deleteRedis(`pantries:user:${UserId}`);

        return res.status(201).json({
            Data: Data,
            Message: "Pantry created successfully"
        });
    }

    async AddItemToPantry(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const Data = req.body;

        await this.pantryService.addPantryItem(UserId, PantryId, Data);

        await deleteRedisPattern(`pantry_items:user:${UserId}:pantry:${PantryId}:*`);

        return res.status(201).json({
            Status: "Success",
            Message: "Item added to pantry successfully"
        });
    }

    async FindPantriesByUser(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);

        const cacheKey = `pantries:user:${UserId}`;
        const cachedData = await getRedis(cacheKey);
        if (cachedData) {
            return res.status(200).json({
                Status: "Success",
                Data: cachedData,
                Message: "Pantries fetched successfully"
            });
        }

        const data = await this.pantryService.findPantriesByUser(UserId);

        await setRedis(cacheKey, data, 3600);

        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Pantries fetched successfully"
        });
    }

    async FilterInventoryByPantry(req: Request, res: Response) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const { status } = req.query as PantryQueryDto;
        const { user } = req as AuthInterface;

        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);

        const ProductName = req.query.ProductName as string;

        const sortedQuery = Object.keys(req.query).sort().reduce((acc, key) => {
            acc[key] = req.query[key];
            return acc;
        }, {} as any);
        const cacheKey = `pantry_items:user:${UserId}:pantry:${PantryId}:${JSON.stringify(sortedQuery)}`;

        const cachedData = await getRedis(cacheKey);
        if (cachedData) {
            return res.status(200).json({
                Status: "Success",
                Data: cachedData,
                Message: "Fetched successfully"
            });
        }

        const data = await this.pantryService.findAllItemsByPantry(
            UserId,
            PantryId,
            status,
            page,
            limit,
            ProductName
        );

        await setRedis(cacheKey, data, 3600);

        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Fetched successfully"
        });
    }



    async UpdatePantryItem(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const ItemId = Number(req.params.id);
        const Data = req.body;

        await this.pantryService.updatePantryItem(UserId, PantryId, ItemId, Data);

        await deleteRedisPattern(`pantry_items:user:${UserId}:pantry:${PantryId}:*`);

        return res.status(200).json({
            Status: "Success",
            Message: "Item Updated Successfully"
        });
    }

    async DeletePantryItem(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const PantryId = Number(req.params.pantryId);
        const ItemId = Number(req.params.id);

        const data = await this.pantryService.deletePantryItem(UserId, PantryId, ItemId);

        await deleteRedisPattern(`pantry_items:user:${UserId}:pantry:${PantryId}:*`);

        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Item deleted successfully"
        });
    }
}