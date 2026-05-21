import { PantryRepository } from './pantry.repository';
import { CreatePantryDto, UpdatePantryDto } from './pantry.schema';


export class PantryService {

    private pantryRepository: PantryRepository;

    constructor(pantryRepository: PantryRepository) {

        this.pantryRepository = pantryRepository
    }

    getItemStatus(exp: Date | null) {

        if (!exp) return 'NO_EXPIRATION';
        const now = new Date()
        const TodayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
        const ExpDate = Date.UTC(exp.getUTCFullYear(), exp.getUTCMonth(), exp.getUTCDate())
        const DiffDays = Math.round((ExpDate - TodayUTC) / (1000 * 60 * 60 * 24))

        if (DiffDays < 0) {
            return 'EXPIRED'
        }

        if (DiffDays === 0) {
            return `EXPIRING_TODAY`
        }
        if (DiffDays <= 3) {
            return `CRITICAL_EXPIRING_IN_${DiffDays}_DAYS`
        }
        if (DiffDays <= 7) {
            return `EXPIRING_IN_${DiffDays}_DAYS`
        }

        return `FRESH`

    }


    getExpirationFilters(status?: string) {

        const now = new Date()
        const TodayUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())

        switch (status) {

            case 'EXPIRED': return { lt: TodayUTC }

            case 'EXPIRING_TODAY': return { equals: TodayUTC }

            case 'CRITICAL':
                const in3Days = new Date()
                in3Days.setDate(in3Days.getDate() + 3);
                return {
                    gt: TodayUTC,
                    lt: in3Days
                }

            case 'EXPIRING_IN_7_DAYS':
                const in7Days = new Date()
                in7Days.setDate(in7Days.getDate() + 7);
                return {
                    gt: TodayUTC,
                    lt: in7Days
                }

            case 'FRESH': return { gt: TodayUTC }
        }

        return {}
    }

    async createPantry(UserIdFromToken: number, Data: CreatePantryDto) {

        if (Data.ExpirationDate <= new Date()) {

            const error: any = new Error('Cannot add expired product to the pantry')
            error.statusCode = 400
            throw error
        }

        if (Data.Quantity <= 0) {

            const error: any = new Error('Quantity must be  greater that 0')
            error.statusCode = 400
            throw error
        }



        await this.pantryRepository.CreatePantry(UserIdFromToken, Data)
        return {
            message: "Item added successfully"
        }
    }

    async findAllByUser(UserId: number, status?: string, page: number = 1, limit: number = 20) {

        const DateFilter = this.getExpirationFilters(status)

        const items = await this.pantryRepository.FindManyByUserId(UserId, DateFilter, page, limit)

        return items.map(item => ({
            ...item,
            status: this.getItemStatus(item.ExpirationDate)
        }))
    }


    async updatePantry(UserId: number, ItemId: number, Data: UpdatePantryDto) {

        if (Data.ExpirationDate != undefined && Data.ExpirationDate <= new Date()) {

            const error: any = new Error("Cannot add expired product at the pantry")
            error.statusCode = 400
            throw error

        };

        if (Data.Quantity != undefined && Data.Quantity <= 0) {

            const error: any = new Error(" Quantity must be greater that 0 ")
            error.statusCode = 400
            throw error
        };

        const result = await this.pantryRepository.UpdatePantry(UserId, ItemId, Data)

        if (result.count === 0) {

            const error: any = new Error("Product not found or you don't have permission to update")
            error.statusCode = 404
            throw error
        }

        return {
            message: "Item updated successfully"
        }
    }

    async deletePantryItem(UserId: number, ItemId: number) {
        const result = await this.pantryRepository.DeletePantryItem(UserId, ItemId)

        if (result.count === 0) {
            const error: any = new Error("Product not found or you don't have permission")
            error.statusCode = 404
            throw error
        }
        return {
            message: "Item deleted successfully"
        }
    }


}