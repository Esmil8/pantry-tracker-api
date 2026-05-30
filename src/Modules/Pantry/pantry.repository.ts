import { prisma } from '../../Shared/Prisma';
import { Prisma } from '../../../generated/prisma';
import { CreatePantryDto, AddPantryItemDto, UpdatePantryItemDto } from './pantry.schema'
import { getLimit } from '../../Shared/Pagination.helper';

export class PantryRepository {

    async createPantry(UserId: number, Data: CreatePantryDto) {
        return await prisma.pantry.create({
            data: {
                Name: Data.Name,
                UserId: UserId
            }
        });
    }

    async findPantryById(PantryId: number) {
        return await prisma.pantry.findUnique({
            where: { Id: PantryId }
        });
    }

    async addPantryItem(PantryId: number, Data: AddPantryItemDto) {
        return await prisma.pantryItem.create({
            data: {
                ...Data,
                PantryId: PantryId
            }
        });
    }

    async findItemsByPantryId(PantryId: number, DateFilter?: Prisma.DateTimeFilter, page: number = 1, limit: number = 20) {
        const { skip, limit: take } = getLimit(page, limit);

        return await prisma.pantryItem.findMany({
            where: {
                PantryId: PantryId,
                ExpirationDate: DateFilter
            },
            skip,
            take,
            include: { Product: true },
        });
    }

    async updatePantryItem(PantryId: number, ItemId: number, Data: UpdatePantryItemDto) {
        return await prisma.pantryItem.updateMany({
            where: {
                Id: ItemId,
                PantryId: PantryId
            },
            data: Data
        });
    }

    async deletePantryItem(PantryId: number, ItemId: number) {
        return await prisma.pantryItem.deleteMany({
            where: {
                Id: ItemId,
                PantryId: PantryId
            }
        });
    }
}