"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitService = void 0;
class UnitService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createUnit(userId, unit) {
        const ADMIN_ID = 1;
        if (userId !== ADMIN_ID) {
            const error = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.createUnit(unit);
    }
    async getUnits(query, page, limit) {
        return await this.repository.findAll(query, page, limit);
    }
    async getUnitById(id) {
        const unit = await this.repository.findById(id);
        if (!unit) {
            const error = new Error("Unit not found");
            error.statusCode = 404;
            throw error;
        }
        return unit;
    }
}
exports.UnitService = UnitService;
