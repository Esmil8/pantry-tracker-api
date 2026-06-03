"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PantryService = void 0;
class PantryService {
    pantryRepository;
    constructor(pantryRepository) {
        this.pantryRepository = pantryRepository;
    }
    getItemStatus(exp) {
        if (!exp)
            return 'NO_EXPIRATION';
        const now = new Date();
        const TodayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        const ExpDate = Date.UTC(exp.getUTCFullYear(), exp.getUTCMonth(), exp.getUTCDate());
        const DiffDays = Math.round((ExpDate - TodayUTC) / (1000 * 60 * 60 * 24));
        console.log(`Días de diferencia calculados: ${DiffDays}`);
        if (DiffDays < 0) {
            return 'EXPIRED';
        }
        if (DiffDays === 0) {
            return `EXPIRING_TODAY`;
        }
        if (DiffDays <= 3) {
            return `CRITICAL_EXPIRING_IN_${DiffDays}_DAYS`;
        }
        if (DiffDays <= 7) {
            return `EXPIRING_IN_${DiffDays}_DAYS`;
        }
        return `FRESH`;
    }
    getExpirationFilters(status) {
        const now = new Date();
        const TodayUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
        switch (status) {
            case 'EXPIRED': return { lt: TodayUTC };
            case 'EXPIRING_TODAY': return { equals: TodayUTC };
            case 'CRITICAL':
                const in3Days = new Date();
                in3Days.setDate(in3Days.getDate() + 3);
                return {
                    gt: TodayUTC,
                    lt: in3Days
                };
            case 'EXPIRING_IN_7_DAYS':
                const in7Days = new Date();
                in7Days.setDate(in7Days.getDate() + 7);
                return {
                    gt: TodayUTC,
                    lt: in7Days
                };
            case 'FRESH': return { gt: TodayUTC };
        }
        return {};
    }
    async createPantry(userId, data) {
        await this.pantryRepository.createPantry(userId, data);
        return {
            message: "Pantry created successfully"
        };
    }
    async addPantryItem(userId, pantryId, data) {
        const pantry = await this.pantryRepository.findPantryById(pantryId);
        if (!pantry) {
            const error = new Error("Pantry not found");
            error.statusCode = 404;
            throw error;
        }
        if (pantry.UserId !== userId) {
            const error = new Error("Unauthorized: This pantry does not belong to you");
            error.statusCode = 403;
            throw error;
        }
        if (data.ExpirationDate && data.ExpirationDate < new Date()) {
            const error = new Error("Cannot add an expired product to the pantry");
            error.statusCode = 400;
            throw error;
        }
        if (data.Quantity <= 0) {
            const error = new Error("Quantity must be greater than 0");
            error.statusCode = 400;
            throw error;
        }
        await this.pantryRepository.addPantryItem(pantryId, data);
        return {
            message: "Item added to pantry successfully"
        };
    }
    async findAllItemsByPantry(userId, pantryId, status, page = 1, limit = 20, ProductName) {
        const pantry = await this.pantryRepository.findPantryById(pantryId);
        if (!pantry) {
            const error = new Error("Pantry not found");
            error.statusCode = 404;
            throw error;
        }
        if (pantry.UserId !== userId) {
            const error = new Error("Unauthorized: You don't have access to this pantry");
            error.statusCode = 403;
            throw error;
        }
        const DateFilter = this.getExpirationFilters(status);
        const items = await this.pantryRepository.findItemsByPantryId(pantryId, {
            productName: ProductName,
            DateFilter: DateFilter
        }, page, limit);
        return items.map(item => ({
            ...item,
            status: this.getItemStatus(item.ExpirationDate)
        }));
    }
    async updatePantryItem(userId, pantryId, itemId, data) {
        const pantry = await this.pantryRepository.findPantryById(pantryId);
        if (!pantry || pantry.UserId !== userId) {
            const error = new Error("Unauthorized or Pantry not found");
            error.statusCode = 403;
            throw error;
        }
        if (data.ExpirationDate != undefined && data.ExpirationDate <= new Date()) {
            const error = new Error("Cannot add expired product at the pantry");
            error.statusCode = 400;
            throw error;
        }
        if (data.Quantity != undefined && data.Quantity <= 0) {
            const error = new Error("Quantity must be greater than 0");
            error.statusCode = 400;
            throw error;
        }
        const result = await this.pantryRepository.updatePantryItem(pantryId, itemId, data);
        if (result.count === 0) {
            const error = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }
        return {
            message: "Item updated successfully"
        };
    }
    async deletePantryItem(userId, pantryId, itemId) {
        const pantry = await this.pantryRepository.findPantryById(pantryId);
        if (!pantry || pantry.UserId !== userId) {
            const error = new Error("Unauthorized or Pantry not found");
            error.statusCode = 403;
            throw error;
        }
        const result = await this.pantryRepository.deletePantryItem(pantryId, itemId);
        if (result.count === 0) {
            const error = new Error("Product not found");
            error.statusCode = 404;
            throw error;
        }
        return {
            message: "Item deleted successfully"
        };
    }
}
exports.PantryService = PantryService;
