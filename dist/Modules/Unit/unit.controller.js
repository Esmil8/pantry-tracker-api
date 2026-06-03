"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitController = void 0;
class UnitController {
    service;
    constructor(service) {
        this.service = service;
    }
    async createUnit(req, res) {
        const { user } = req;
        const UserId = Number(user?.id);
        const Data = req.body;
        const unit = await this.service.createUnit(UserId, Data);
        return res.status(201).json({
            status: "Success",
            Data: unit,
            Message: "Unit created successfully"
        });
    }
    async getUnits(req, res) {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const query = req.query;
        const data = await this.service.getUnits(query, page, limit);
        return res.status(200).json({
            status: "Success",
            Data: data,
            Message: "Units fetched successfully"
        });
    }
    async getUnitById(req, res) {
        const id = Number(req.params.id);
        const unit = await this.service.getUnitById(id);
        return res.status(200).json({
            status: "Success",
            Data: unit,
            Message: "Unit fetched successfully"
        });
    }
}
exports.UnitController = UnitController;
