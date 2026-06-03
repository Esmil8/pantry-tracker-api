"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantryRepository = void 0;
const Prisma_1 = require("../../Shared/Prisma");
const Pagination_helper_1 = require("../../Shared/Pagination.helper");
class PantryRepository {
    async createPantry(UserId, Data) {
        return await Prisma_1.prisma.pantry.create({
            data: {
                Name: Data.Name,
                UserId: UserId
            }
        });
    }
    async findPantryById(PantryId) {
        return await Prisma_1.prisma.pantry.findUnique({
            where: { Id: PantryId }
        });
    }
    async addPantryItem(PantryId, Data) {
        return await Prisma_1.prisma.pantryItem.create({
            data: {
                ...Data,
                PantryId: PantryId
            }
        });
    }
    async findItemsByPantryId(PantryId, filters, page = 1, limit = 20) {
        const { skip, limit: take } = (0, Pagination_helper_1.getLimit)(page, limit);
        return await Prisma_1.prisma.pantryItem.findMany({
            where: {
                PantryId: PantryId,
                ExpirationDate: filters.DateFilter,
                Product: filters.productName ? {
                    Name: {
                        contains: filters.productName
                    }
                } : undefined
            },
            skip,
            take,
            include: { Product: true },
            orderBy: { ExpirationDate: 'asc' }
        });
    }
    async updatePantryItem(PantryId, ItemId, Data) {
        return await Prisma_1.prisma.pantryItem.updateMany({
            where: {
                Id: ItemId,
                PantryId: PantryId
            },
            data: Data
        });
    }
    async deletePantryItem(PantryId, ItemId) {
        return await Prisma_1.prisma.pantryItem.deleteMany({
            where: {
                Id: ItemId,
                PantryId: PantryId
            }
        });
    }
}
exports.PantryRepository = PantryRepository;
