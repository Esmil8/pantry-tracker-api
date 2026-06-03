"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const pantry_service_1 = require("./pantry.service");
(0, vitest_1.describe)('pantryService - getItemStatus', () => {
    let service;
    const fakenow = new Date('2026-05-20T10:00:00Z');
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.useFakeTimers();
        vitest_1.vi.setSystemTime(fakenow);
        const mockRepository = {};
        service = new pantry_service_1.PantryService(mockRepository);
    });
    (0, vitest_1.afterEach)(() => {
        vitest_1.vi.useRealTimers();
    });
    (0, vitest_1.it)('It should be null', () => {
        const status = service.getItemStatus(null);
        (0, vitest_1.expect)(status).toBe('NO_EXPIRATION');
    });
    (0, vitest_1.it)(' It should be EXPIRED ', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const result = service.getItemStatus(yesterday);
        (0, vitest_1.expect)(result).toBe('EXPIRED');
    });
    (0, vitest_1.it)(' It should be  EXPIRING_TODAY', () => {
        const today = new Date();
        const result = service.getItemStatus(today);
        (0, vitest_1.expect)(result).toBe('EXPIRING_TODAY');
    });
    (0, vitest_1.it)(' It should be CRITICAL_EXPIRING_IN_3_DAYS', () => {
        const in3Days = new Date();
        in3Days.setDate(in3Days.getDate() + 3);
        const result = service.getItemStatus(in3Days);
        (0, vitest_1.expect)(result).toBe('CRITICAL_EXPIRING_IN_3_DAYS');
    });
    (0, vitest_1.it)('It should be EXPIRING_IN_7_DAYS', () => {
        const in7Days = new Date();
        in7Days.setDate(in7Days.getDate() + 7);
        const result = service.getItemStatus(in7Days);
        (0, vitest_1.expect)(result).toBe('EXPIRING_IN_7_DAYS');
    });
});
(0, vitest_1.describe)('pantryService - getExpirationFilters', () => {
    let service;
    const fakeNow = new Date('2026-05-20T10:00:00Z');
    const TodayUTC = new Date(fakeNow.getUTCFullYear(), fakeNow.getUTCMonth(), fakeNow.getUTCDate());
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.useFakeTimers();
        vitest_1.vi.setSystemTime(fakeNow);
        const mockRepository = {};
        service = new pantry_service_1.PantryService(mockRepository);
    });
    (0, vitest_1.afterEach)(() => {
        vitest_1.vi.useRealTimers();
    });
    (0, vitest_1.it)('Should return expired filters', () => {
        const filter = service.getExpirationFilters('EXPIRED');
        (0, vitest_1.expect)(filter).toEqual({ lt: TodayUTC });
    });
    (0, vitest_1.it)('Should return EXPIRING_TODAY equals filters', () => {
        const filter = service.getExpirationFilters('EXPIRING_TODAY');
        (0, vitest_1.expect)(filter).toEqual({ equals: TodayUTC });
    });
    (0, vitest_1.it)('it should return CRITICAL filters', () => {
        const in3days = new Date(fakeNow);
        in3days.setDate(in3days.getDate() + 3);
        const filter = service.getExpirationFilters('CRITICAL');
        (0, vitest_1.expect)(filter).toEqual({ gt: TodayUTC, lt: in3days });
    });
    (0, vitest_1.it)('it should return EXPIRING_IN_7_DAYS filters', () => {
        const in7days = new Date(fakeNow);
        in7days.setDate(in7days.getDate() + 7);
        const filter = service.getExpirationFilters('EXPIRING_IN_7_DAYS');
        (0, vitest_1.expect)(filter).toEqual({ gt: TodayUTC, lt: in7days });
    });
    (0, vitest_1.it)('it should return FRESH filters', () => {
        const filter = service.getExpirationFilters('FRESH');
        (0, vitest_1.expect)(filter).toEqual({ gt: TodayUTC });
    });
});
(0, vitest_1.describe)('pantryService - CreatePantryItem', () => {
    const fakenow = new Date('2026-05-20T10:00:00Z');
    (0, vitest_1.it)('Should return Item added successfully', async () => {
        vitest_1.vi.useFakeTimers();
        vitest_1.vi.setSystemTime(fakenow);
        const mockItems = [
            { ProductId: 1, Quantity: 1, ExpirationDate: new Date(fakenow) },
            { ProductId: 2, Quantity: 2, ExpirationDate: new Date(fakenow) }
        ];
        const mockRepo = {
            findPantryById: vitest_1.vi.fn().mockResolvedValue({ Id: 1, UserId: 1, Name: 'My Pantry' }),
            addPantryItem: vitest_1.vi.fn().mockResolvedValue(mockItems)
        };
        const serviceMock = new pantry_service_1.PantryService(mockRepo);
        await serviceMock.addPantryItem(1, 1, mockItems[0]);
        (0, vitest_1.expect)(mockRepo.addPantryItem).toHaveBeenCalledWith(1, mockItems[0]);
    });
});
(0, vitest_1.describe)('pantryService - findAllItemsByPantry', () => {
    let service;
    let mockRepo;
    (0, vitest_1.beforeEach)(() => {
        const today = new Date('2026-05-22T10:00:00Z');
        vitest_1.vi.useFakeTimers();
        vitest_1.vi.setSystemTime(today);
        mockRepo = {};
        service = new pantry_service_1.PantryService(mockRepo);
    });
    (0, vitest_1.afterEach)(() => {
        vitest_1.vi.restoreAllMocks();
    });
    (0, vitest_1.it)('Should return All the items and status', async () => {
        const mockDbItems = [
            {
                Id: 1,
                Quantity: 1,
                ExpirationDate: new Date('2026-05-26T10:00:00Z'),
                Product: {
                    Id: 80,
                    Name: 'Milk',
                    Description: 'Fresh Milk',
                    Brand: 'Alpina'
                }
            }
        ];
        mockRepo.findPantryById = vitest_1.vi.fn().mockResolvedValue({ Id: 1, UserId: 1, Name: 'My Pantry' });
        mockRepo.findItemsByPantryId = vitest_1.vi.fn().mockResolvedValue(mockDbItems);
        const result = await service.findAllItemsByPantry(1, 1, 'CRITICAL');
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result.length).toBeGreaterThan(0);
        (0, vitest_1.expect)(result[0].Product.Name).toBe('Milk');
        (0, vitest_1.expect)(result[0].status).toBe('EXPIRING_IN_4_DAYS');
    });
});
const mockDbItems = [
    {
        Id: 1,
        UserId: 1,
        Quantity: 1,
        ExpirationDate: new Date('2026-05-26T10:00:00Z'),
        Product: {
            Id: 80,
            Name: 'Milk',
            Description: 'Fresh Milk',
            Brand: 'Alpina'
        }
    }
];
(0, vitest_1.describe)('pantryService - updatePantryItem', () => {
    let mockRepo = {};
    let service = new pantry_service_1.PantryService(mockRepo);
    const itemToUpdate = mockDbItems[0];
    (0, vitest_1.beforeEach)(() => {
        const today = new Date('2025-01-01T10:00:00Z');
        vitest_1.vi.useFakeTimers();
        vitest_1.vi.setSystemTime(today);
        mockRepo.findPantryById = vitest_1.vi.fn().mockResolvedValue({ Id: 1, UserId: itemToUpdate.UserId, Name: 'My Pantry' });
    });
    (0, vitest_1.afterEach)(() => {
        vitest_1.vi.restoreAllMocks();
    });
    (0, vitest_1.it)('Should return Cannot add expired product at the pantry', async () => {
        await (0, vitest_1.expect)(service.updatePantryItem(itemToUpdate.UserId, 1, itemToUpdate.Id, {
            Quantity: 4,
            ExpirationDate: new Date('2024-05-26T10:00:00Z')
        })).rejects.toThrow("Cannot add expired product at the pantry");
    });
    (0, vitest_1.it)('Should return Quantity must be greater than 0', async () => {
        await (0, vitest_1.expect)(service.updatePantryItem(itemToUpdate.UserId, 1, itemToUpdate.Id, {
            Quantity: 0,
            ExpirationDate: new Date('2026-05-26T10:00:00Z')
        })).rejects.toThrow("Quantity must be greater than 0");
    });
    (0, vitest_1.it)('Should return Item Updated', async () => {
        mockRepo.updatePantryItem = vitest_1.vi.fn().mockResolvedValue({ count: 1 });
        const result = await service.updatePantryItem(itemToUpdate.UserId, 1, itemToUpdate.Id, {
            Quantity: 5,
            ExpirationDate: new Date('2026-05-26T10:00:00Z')
        });
        (0, vitest_1.expect)(result).toEqual({ message: "Item updated successfully" });
    });
});
(0, vitest_1.describe)('pantryService - deletePantryItem', () => {
    (0, vitest_1.it)('Should return Item deleted successfully', async () => {
        let mockRepo = {};
        mockRepo.findPantryById = vitest_1.vi.fn().mockResolvedValue({ Id: 1, UserId: mockDbItems[0].UserId, Name: 'My Pantry' });
        mockRepo.deletePantryItem = vitest_1.vi.fn().mockResolvedValue({ count: 1 });
        const service = new pantry_service_1.PantryService(mockRepo);
        const itemToDelete = mockDbItems[0];
        const result = await service.deletePantryItem(itemToDelete.UserId, 1, itemToDelete.Id);
        (0, vitest_1.expect)(result).toEqual({ message: "Item deleted successfully" });
    });
});
