import { describe, it, expect, vi, beforeEach, Mocked } from 'vitest';
import { UnitService } from './unit.service';
import { UnitRepository } from './unit.repository';
import { CreateUnitDto, GetUnitsQueryDto } from './unit.schema';

vi.mock('./unit.repository');
vi.mock('../../Shared/Prisma', () => ({
    prisma: {}
}));

describe('UnitService', () => {
    let service: UnitService;
    let repository: Mocked<UnitRepository>;

    beforeEach(() => {
        vi.clearAllMocks();
        repository = new UnitRepository() as Mocked<UnitRepository>;
        service = new UnitService(repository);
    });

    const mockUnit = {
        Id: 1,
        Name: 'Kilogram',
        Abbreviation: 'kg',
    };

    describe('createUnit', () => {
        it('should create a unit if user is admin (id 1)', async () => {
            const unitDto: CreateUnitDto = {
                Name: 'Kilogram',
                Abbreviation: 'kg',
            };

            repository.createUnit.mockResolvedValue(mockUnit as any);

            const result = await service.createUnit(1, unitDto);

            expect(result).toEqual(mockUnit);
            expect(repository.createUnit).toHaveBeenCalledWith(unitDto);
        });

        it('should throw 403 error if user is not admin', async () => {
            const unitDto: CreateUnitDto = {
                Name: 'Kilogram',
                Abbreviation: 'kg',
            };

            await expect(service.createUnit(2, unitDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            expect(repository.createUnit).not.toHaveBeenCalled();
        });
    });

    describe('getUnits', () => {
        it('should return units', async () => {
            const query: GetUnitsQueryDto = { name: 'Kilo' };
            const page = 1;
            const limit = 10;

            repository.findAll.mockResolvedValue([mockUnit] as any);

            const result = await service.getUnits(query, page, limit);

            expect(result).toEqual([mockUnit]);
            expect(repository.findAll).toHaveBeenCalledWith(query, page, limit);
        });
    });

    describe('getUnitById', () => {
        it('should return a unit by id', async () => {
            repository.findById.mockResolvedValue(mockUnit as any);

            const result = await service.getUnitById(1);

            expect(result).toEqual(mockUnit);
            expect(repository.findById).toHaveBeenCalledWith(1);
        });

        it('should throw 404 if unit not found', async () => {
            repository.findById.mockResolvedValue(null as any);

            await expect(service.getUnitById(999)).rejects.toThrow("Unit not found");
        });
    });
});
