"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRepository = void 0;
const Pagination_helper_1 = require("../../Shared/Pagination.helper");
const Prisma_1 = require("../../Shared/Prisma");
class UnitRepository {
    async createUnit(unit) {
        return await Prisma_1.prisma.unit.create({
            data: unit
        });
    }
    async findAll(query, page, limit) {
        const { skip, limit: take } = (0, Pagination_helper_1.getLimit)(page, limit);
        return await Prisma_1.prisma.unit.findMany({
            where: {
                Name: query.name ? { contains: query.name } : undefined,
                Abbreviation: query.abbreviation ? { contains: query.abbreviation } : undefined,
            },
            take,
            skip,
        });
    }
    async findById(id) {
        return await Prisma_1.prisma.unit.findUnique({
            where: { Id: id }
        });
    }
}
exports.UnitRepository = UnitRepository;
