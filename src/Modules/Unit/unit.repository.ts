import { getLimit } from "../../Utils/Pagination.helper";
import { prisma } from "../../Shared/Databases/Prisma";
import { CreateUnitDto, GetUnitsQueryDto } from "./unit.schema";

export class UnitRepository {

    async createUnit(unit: CreateUnitDto) {
        return await prisma.unit.create({
            data: unit
        });
    }

    async findAll(query: GetUnitsQueryDto, page: number, limit: number) {
        const { skip, limit: take } = getLimit(page, limit);
        return await prisma.unit.findMany({
            where: {
                Name: query.name ? { contains: query.name } : undefined,
                Abbreviation: query.abbreviation ? { contains: query.abbreviation } : undefined,
            },
            take,
            skip,
        });
    }

    async findById(id: number) {
        return await prisma.unit.findUnique({
            where: { Id: id }
        });
    }
}
