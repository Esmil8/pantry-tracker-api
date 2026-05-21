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



})