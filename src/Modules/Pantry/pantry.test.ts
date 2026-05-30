import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { PantryService } from './pantry.service';
import { PantryRepository } from './pantry.repository';

describe('pantryService - getItemStatus', () => {

    let service: PantryService;
    const fakenow = new Date('2026-05-20T10:00:00Z')


    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(fakenow)

        const mockRepository = {} as PantryRepository;
        service = new PantryService(mockRepository)
    })

    afterEach(() => {
        vi.useRealTimers();
    })

    it('It should be null', () => {
        const status = service.getItemStatus(null);
        expect(status).toBe('NO_EXPIRATION');
    })

    it(' It should be EXPIRED ', () => {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const result = service.getItemStatus(yesterday)
        expect(result).toBe('EXPIRED')
    })

    it(' It should be  EXPIRING_TODAY', () => {
        const today = new Date()
        const result = service.getItemStatus(today)
        expect(result).toBe('EXPIRING_TODAY')
    })

    it(' It should be CRITICAL_EXPIRING_IN_3_DAYS', () => {
        const in3Days = new Date();
        in3Days.setDate(in3Days.getDate() + 3)
        const result = service.getItemStatus(in3Days)
        expect(result).toBe('CRITICAL_EXPIRING_IN_3_DAYS')
    });

    it('It should be EXPIRING_IN_7_DAYS', () => {
        const in7Days = new Date();
        in7Days.setDate(in7Days.getDate() + 7)
        const result = service.getItemStatus(in7Days)
        expect(result).toBe('EXPIRING_IN_7_DAYS')
    });


});

describe('pantryService - getExpirationFilters', () => {
    let service: PantryService;
    const fakeNow = new Date('2026-05-20T10:00:00Z')
    const TodayUTC = new Date(fakeNow.getUTCFullYear(), fakeNow.getUTCMonth(), fakeNow.getUTCDate());

    beforeEach(() => {


        vi.useFakeTimers();
        vi.setSystemTime(fakeNow)
        const mockRepository = {} as PantryRepository;
        service = new PantryService(mockRepository)
    })

    afterEach(() => {
        vi.useRealTimers();
    })

    it('Should return expired filters', () => {
        const filter = service.getExpirationFilters('EXPIRED')
        expect(filter).toEqual({ lt: TodayUTC })
    })

    it('Should return EXPIRING_TODAY equals filters', () => {
        const filter = service.getExpirationFilters('EXPIRING_TODAY')
        expect(filter).toEqual({ equals: TodayUTC })
    })

    it('it should return CRITICAL filters', () => {
        const in3days = new Date(fakeNow);
        in3days.setDate(in3days.getDate() + 3);
        const filter = service.getExpirationFilters('CRITICAL')
        expect(filter).toEqual({ gt: TodayUTC, lt: in3days })
    })

    it('it should return EXPIRING_IN_7_DAYS filters', () => {
        const in7days = new Date(fakeNow);
        in7days.setDate(in7days.getDate() + 7);
        const filter = service.getExpirationFilters('EXPIRING_IN_7_DAYS')
        expect(filter).toEqual({ gt: TodayUTC, lt: in7days })
    })

    it('it should return FRESH filters', () => {
        const filter = service.getExpirationFilters('FRESH')
        expect(filter).toEqual({ gt: TodayUTC })
    })
});


describe('pantryService - CreatePantryItem', () => {

    const fakenow = new Date('2026-05-20T10:00:00Z');

    it('Should return Item added successfully', async () => {
        vi.useFakeTimers();
        vi.setSystemTime(fakenow);

        const mockItems = [
            { ProductId: 1, Quantity: 1, ExpirationDate: new Date(fakenow) },
            { ProductId: 2, Quantity: 2, ExpirationDate: new Date(fakenow) }
        ]

        const mockRepo = {
            findPantryById: vi.fn().mockResolvedValue({ Id: 1, UserId: 1, Name: 'My Pantry' }),
            addPantryItem: vi.fn().mockResolvedValue(mockItems)
        } as unknown as PantryRepository;
        const serviceMock = new PantryService(mockRepo);
        await serviceMock.addPantryItem(1, 1, mockItems[0])
        expect(mockRepo.addPantryItem).toHaveBeenCalledWith(1, mockItems[0])
    });
});

describe('pantryService - findAllItemsByPantry', () => {

    let service: PantryService
    let mockRepo: PantryRepository

    beforeEach(() => {
        const today = new Date('2026-05-22T10:00:00Z')
        vi.useFakeTimers();
        vi.setSystemTime(today)
        mockRepo = {} as PantryRepository;
        service = new PantryService(mockRepo)
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('Should return All the items and status', async () => {
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
        ]
        mockRepo.findPantryById = vi.fn().mockResolvedValue({ Id: 1, UserId: 1, Name: 'My Pantry' });
        mockRepo.findItemsByPantryId = vi.fn().mockResolvedValue(mockDbItems);

        const result = await service.findAllItemsByPantry(1, 1, 'CRITICAL');

        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);

        expect(result[0].Product.Name).toBe('Milk')
        expect(result[0].status).toBe('EXPIRING_IN_4_DAYS')

    })
})
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
]

describe('pantryService - updatePantryItem', () => {
    let mockRepo: PantryRepository = {} as PantryRepository;
    let service: PantryService = new PantryService(mockRepo);

    const itemToUpdate = mockDbItems[0]

    beforeEach(() => {
        const today = new Date('2025-01-01T10:00:00Z');
        vi.useFakeTimers();
        vi.setSystemTime(today);
        mockRepo.findPantryById = vi.fn().mockResolvedValue({ Id: 1, UserId: itemToUpdate.UserId, Name: 'My Pantry' });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('Should return Cannot add expired product at the pantry', async () => {
        await expect(service.updatePantryItem(
            itemToUpdate.UserId,
            1,
            itemToUpdate.Id,
            {
                Quantity: 4,
                ExpirationDate: new Date('2024-05-26T10:00:00Z')
            }
        )).rejects.toThrow("Cannot add expired product at the pantry")

    })

    it('Should return Quantity must be greater than 0', async () => {
        await expect(service.updatePantryItem(
            itemToUpdate.UserId,
            1,
            itemToUpdate.Id,
            {
                Quantity: 0,
                ExpirationDate: new Date('2026-05-26T10:00:00Z')
            }
        )).rejects.toThrow("Quantity must be greater than 0")

    })

    it('Should return Item Updated', async () => {



        mockRepo.updatePantryItem = vi.fn().mockResolvedValue({ count: 1 });

        const result = await service.updatePantryItem(
            itemToUpdate.UserId,
            1,
            itemToUpdate.Id,
            {
                Quantity: 5,
                ExpirationDate: new Date('2026-05-26T10:00:00Z')
            }
        )
        expect(result).toEqual({ message: "Item updated successfully" });
    })


});

describe('pantryService - deletePantryItem', () => {

    it('Should return Item deleted successfully', async () => {
        let mockRepo: PantryRepository = {} as PantryRepository;
        mockRepo.findPantryById = vi.fn().mockResolvedValue({ Id: 1, UserId: mockDbItems[0].UserId, Name: 'My Pantry' });
        mockRepo.deletePantryItem = vi.fn().mockResolvedValue({ count: 1 });
        const service = new PantryService(mockRepo);
        const itemToDelete = mockDbItems[0];
        const result = await service.deletePantryItem(itemToDelete.UserId, 1, itemToDelete.Id)

        expect(result).toEqual({ message: "Item deleted successfully" });
    });

});




