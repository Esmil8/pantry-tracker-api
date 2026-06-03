import { prisma } from '../../Shared/Prisma';
import { Prisma } from '../../../generated/prisma';
import { CreatePantryDto, findPantryItemQueryDto, AddPantryItemDto, UpdatePantryItemDto } from './pantry.schema'
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

    async findItemsByPantryId(PantryId: number, filters: { productName?: string, DateFilter?: Prisma.DateTimeFilter }, page: number = 1, limit: number = 20) {
        const { skip, limit: take } = getLimit(page, limit);

        return await prisma.pantryItem.findMany({
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