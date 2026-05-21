import { PantryService } from "./pantry.service";
import { Request, Response } from "express";
import { PantryQueryDto } from './pantry.schema';
import { AuthInterface } from '../Auth/Auth.schema';

export class PantryController {

    constructor(private pantryService: PantryService) { }


    async CreatePantry(req: Request, res: Response) {

        const { user } = req as AuthInterface

        const UserId = Number(user?.id)
        const Data = req.body

        await this.pantryService.createPantry(UserId, Data)

        return res.status(201).json({

            Data: Data,
            Message: "Created successfully"
        })
    }


    async FilterInventoryByUser(req: Request, res: Response) {

        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 20
        const { status } = req.query as PantryQueryDto;
        const { user } = req as AuthInterface
        const UserId = Number(user?.id)

        const data = await this.pantryService.findAllByUser(
            UserId,
            status,
            page,
            limit
        );

        return res.status(200).json({
            Status: "Success",
            Data: data,
            Message: "Fetched successfully"

        })
    }


    async UpdatePantry(req: Request, res: Response) {

        const { user } = req as AuthInterface;

        const UserId = Number(user?.id)
        const ItemId = Number(req.params.id)


        const Data = req.body
        await this.pantryService.updatePantry(UserId, ItemId, Data)

        return res.status(200).json({
            Status: "Success",
            Message: "Item Updated Successfully"
        })
    }

    async DeletePantry(req: Request, res: Response) {

        const { user } = req as AuthInterface;
        const UserId = Number(user?.id)
        const ItemId = Number(req.params.id)

        await this.pantryService.deletePantryItem(UserId, ItemId)

        return res.status(200).json({
            "Status": "Success",
            "Message": "Item deleted successfully"
        })
    }




}