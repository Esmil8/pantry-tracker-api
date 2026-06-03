import { UnitRepository } from "./unit.repository";
import { CreateUnitDto, GetUnitsQueryDto } from "./unit.schema";

export class UnitService {
    constructor(private repository: UnitRepository) { }

    async createUnit(userId: number, unit: CreateUnitDto) {
        const ADMIN_ID = 1;
        if (userId !== ADMIN_ID) {
            const error: any = new Error("Unauthorized: This action is only allowed for administrators");
            error.statusCode = 403;
            throw error;
        }
        return await this.repository.createUnit(unit);
    }

    async getUnits(query: GetUnitsQueryDto, page: number, limit: number) {
        return await this.repository.findAll(query, page, limit);
    }

    async getUnitById(id: number) {
        const unit = await this.repository.findById(id);
        if (!unit) {
            const error: any = new Error("Unit not found");
            error.statusCode = 404;
            throw error;
        }
        return unit;
    }
}
