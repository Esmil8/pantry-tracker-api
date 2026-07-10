import { gte } from 'zod';
import { PantryRepository } from './pantry.repository';
import { CreatePantryDto, AddPantryItemDto, UpdatePantryItemDto, findPantryItemQueryDto } from './pantry.schema';

export class PantryService {

    private pantryRepository: PantryRepository;

    constructor(pantryRepository: PantryRepository) {
        this.pantryRepository = pantryRepository;
    }

    getItemStatus(exp: Date | null, nowMs: number) {
        if (!exp) return 'NO_EXPIRATION';
        const expMs = exp.getTime();
        const diffDays = Math.round((expMs - nowMs) / (1000 * 60 * 60 * 24))
        if (diffDays < 0) {
            return 'EXPIRED'
        }
        if (diffDays === 0) {
            return `EXPIRING_TODAY`
        }
        if (diffDays <= 3) {
            return `CRITICAL_EXPIRING_IN_${diffDays}_DAYS`
        }
        if (diffDays <= 7) {
            return `EXPIRING_IN_${diffDays}_DAYS`
        }
        return `FRESH`
    }

    getExpirationFilters(status?: string) {
        const now = new Date()
        now.setUTCHours(0, 0, 0, 0)
        const TodayUTC = now.toISOString();

        switch (status) {
            case 'EXPIRED': return { lt: TodayUTC }
            case 'EXPIRING_TODAY': return { equals: TodayUTC }
            case 'CRITICAL':
                const in3Days = new Date(now)
                in3Days.setUTCDate(in3Days.getUTCDate() + 3);

                return {
                    gt: TodayUTC,
                    lt: in3Days.toISOString()
                }
            case 'EXPIRING_IN_7_DAYS':
                const since3Days = new Date(now)
                since3Days.setUTCDate(since3Days.getUTCDate() + 3)
                const in7Days = new Date(now)
                in7Days.setUTCDate(in7Days.getUTCDate() + 7);
                return {
                    gt: since3Days.toISOString(),
                    lt: in7Days.toISOString()
                }
            case 'FRESH':
                const since7Days = new Date(now)
                since7Days.setUTCDate(since7Days.getUTCDate() + 7)
                return { gte: since7Days.toISOString() }
        }
        return {}
    }

    async createPantry(userId: number, data: CreatePantryDto) {
        await this.pantryRepository.createPantry(userId, data);
        return {
            message: "Pantry created successfully"
        };
    }

    async addPantryItem(userId: number, pantryId: number, data: AddPantryItemDto) {
        if (data.ExpirationDate && data.ExpirationDate < new Date()) {
            const error: any = new Error("Cannot add an expired product to the pantry");
            error.statusCode = 400;
            throw error;
        }

        if (data.Quantity <= 0) {
            const error: any = new Error("Quantity must be greater than 0");
            error.statusCode = 400;
            throw error;
        }

        try {

            await this.pantryRepository.addPantryItem(userId, pantryId, data);

            return {
                message: "Item added to pantry successfully"
            };
        } catch (prismaError: any) {

            if (prismaError.code === 'P2025') {
                const error: any = new Error("Pantry not found or Unauthorized");
                error.statusCode = 404;
                throw error;
            }
            throw prismaError;
        }
    }

    async findPantriesByUser(userId: number) {
        const pantries = await this.pantryRepository.findPantriesByUser(userId);

        if (pantries.length === 0) {
            const error: any = new Error("Pantries not found");
            error.statusCode = 404;
            throw error;
        }

        return {
            message: "Pantries found successfully",
            pantries
        };
    }

    async findAllItemsByPantry(userId: number, pantryId: number, status?: string, page: number = 1, limit: number = 20, ProductName?: string) {

        const DateFilter = this.getExpirationFilters(status);
        const nowUTC = new Date();
        nowUTC.setUTCHours(0, 0, 0, 0);
        const nowMs = nowUTC.getTime();

        const items = await this.pantryRepository.findItemsByPantryId(
            userId,
            pantryId,
            {
                productName: ProductName,
                DateFilter: DateFilter
            },
            page, limit);

        if (items.length === 0) {
            const pantryExists = await this.pantryRepository.findPantryById(pantryId);

            if (!pantryExists) {
                const error: any = new Error("Pantry not found");
                error.statusCode = 404;
                throw error;
            }

            if (pantryExists.UserId !== userId) {
                const error: any = new Error("Unauthorized: You don't have access to this pantry");
                error.statusCode = 403;
                throw error;
            }

            return [];
        }

        return items.map(item => ({
            ...item,
            status: this.getItemStatus(item.ExpirationDate, nowMs)

        }));
    }


    async updatePantryItem(userId: number, pantryId: number, itemId: number, data: UpdatePantryItemDto) {
        if (data.ExpirationDate != undefined && data.ExpirationDate <= new Date()) {
            const error: any = new Error("Cannot add expired product at the pantry");
            error.statusCode = 400;
            throw error;
        }

        if (data.Quantity != undefined && data.Quantity <= 0) {
            const error: any = new Error("Quantity must be greater than 0");
            error.statusCode = 400;
            throw error;
        }

        const result = await this.pantryRepository.updatePantryItem(userId, pantryId, itemId, data);

        if (result.count === 0) {
            const error: any = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }

        return {
            message: "Item updated successfully"
        };
    }

    async deletePantryItem(userId: number, pantryId: number, itemId: number) {

        const result = await this.pantryRepository.deletePantryItem(userId, pantryId, itemId);

        if (result.count === 0) {
            const error: any = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }
        return {
            message: "Item deleted successfully"
        };
    }
}