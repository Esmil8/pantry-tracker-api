import { Request, Response } from "express";
import { UnitService } from "./unit.service";
import { GetUnitsQueryDto } from "./unit.schema";
import { AuthInterface } from "../Auth/Auth.schema";

export class UnitController {
    constructor(private readonly service: UnitService) { }

    async createUnit(req: Request, res: Response) {
        const { user } = req as AuthInterface;
        const UserId = Number(user?.id);
        const Data = req.body;

        const unit = await this.service.createUnit(UserId, Data);

        return res.status(201).json({
            status: "Success",
            Data: unit,
            Message: "Unit created successfully"
        });
    }

    async getUnits(req: Request, res: Response) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const query = req.query as unknown as GetUnitsQueryDto;
        const data = await this.service.getUnits(query, page, limit);

        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Units fetched successfully"
        });
    }

    async getUnitById(req: Request, res: Response) {
        const id = Number(req.params.id);
        const unit = await this.service.getUnitById(id);

        return res.status(200).json({
            status: "Success",
            Data: unit,
            Message: "Unit fetched successfully"
        });
    }
}
