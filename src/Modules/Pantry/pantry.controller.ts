import { PantryService } from "./pantry.service";
import { Request, Response } from "express";
import { PantryQueryDto } from './pantry.schema';
import { AuthInterface } from '../Auth/Auth.schema';

export class PantryController {

    constructor(private pantryService: PantryService) { }

    async CreatePantry(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const Data = req.body;

        await this.pantryService.createPantry(UserId, Data);

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

        return res.status(201).json({
            Status: "Success",
            Message: "Item added to pantry successfully"
        });
    }

    async FindPantriesByUser(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);

        const data = await this.pantryService.findPantriesByUser(UserId);

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
        const data = await this.pantryService.findAllItemsByPantry(
            UserId,
            PantryId,
            status,
            page,
            limit,
            ProductName
        );

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

        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Item deleted successfully"
        });
    }
}