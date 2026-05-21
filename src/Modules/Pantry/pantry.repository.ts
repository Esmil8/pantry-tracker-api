import { prisma } from '../../Shared/Prisma';
import { Prisma } from '../../../generated/prisma';
import { CreatePantryDto, UpdatePantryDto } from './pantry.schema'
import { getLimit } from '../../Shared/Pagination.helper';

export class PantryRepository {

    async CreatePantry(UserId: number, Data: CreatePantryDto) {

        return await prisma.pantryItem.create({ data: { ...Data, UserId: UserId } })
    }


    async FindManyByUserId(userId: number, DateFilter?: Prisma.DateTimeFilter, page: number = 1, limit: number = 20) {

        const { skip, limit: take } = getLimit(page, limit);

        return await prisma.pantryItem.findMany({
            where: {
                UserId: userId, ExpirationDate: DateFilter
            },
            skip,
            take,
            include: { Product: true },
        });
    }

    async UpdatePantry(UserId: number, ItemId: number, Data: UpdatePantryDto) {

        return await prisma.pantryItem.updateMany({
            where: {
                Id: ItemId,
                UserId: UserId
            },
            data: Data
        })

    }

    async DeletePantryItem(UserId: number, ItemId: number) {

        return await prisma.pantryItem.deleteMany({
            where: {
                Id: ItemId,
                UserId: UserId
            }
        })
    }
}

