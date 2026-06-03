"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const unit_service_1 = require("./unit.service");
const unit_repository_1 = require("./unit.repository");
vitest_1.vi.mock('./unit.repository');
vitest_1.vi.mock('../../Shared/Prisma', () => ({
    prisma: {}
}));
(0, vitest_1.describe)('UnitService', () => {
    let service;
    let repository;
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
        repository = new unit_repository_1.UnitRepository();
        service = new unit_service_1.UnitService(repository);
    });
    const mockUnit = {
        Id: 1,
        Name: 'Kilogram',
        Abbreviation: 'kg',
    };
    (0, vitest_1.describe)('createUnit', () => {
        (0, vitest_1.it)('should create a unit if user is admin (id 1)', async () => {
            const unitDto = {
                Name: 'Kilogram',
                Abbreviation: 'kg',
            };
            repository.createUnit.mockResolvedValue(mockUnit);
            const result = await service.createUnit(1, unitDto);
            (0, vitest_1.expect)(result).toEqual(mockUnit);
            (0, vitest_1.expect)(repository.createUnit).toHaveBeenCalledWith(unitDto);
        });
        (0, vitest_1.it)('should throw 403 error if user is not admin', async () => {
            const unitDto = {
                Name: 'Kilogram',
                Abbreviation: 'kg',
            };
            await (0, vitest_1.expect)(service.createUnit(2, unitDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            (0, vitest_1.expect)(repository.createUnit).not.toHaveBeenCalled();
        });
    });
    (0, vitest_1.describe)('getUnits', () => {
        (0, vitest_1.it)('should return units', async () => {
            const query = { name: 'Kilo' };
            const page = 1;
            const limit = 10;
            repository.findAll.mockResolvedValue([mockUnit]);
            const result = await service.getUnits(query, page, limit);
            (0, vitest_1.expect)(result).toEqual([mockUnit]);
            (0, vitest_1.expect)(repository.findAll).toHaveBeenCalledWith(query, page, limit);
        });
    });
    (0, vitest_1.describe)('getUnitById', () => {
        (0, vitest_1.it)('should return a unit by id', async () => {
            repository.findById.mockResolvedValue(mockUnit);
            const result = await service.getUnitById(1);
            (0, vitest_1.expect)(result).toEqual(mockUnit);
            (0, vitest_1.expect)(repository.findById).toHaveBeenCalledWith(1);
        });
        (0, vitest_1.it)('should throw 404 if unit not found', async () => {
            repository.findById.mockResolvedValue(null);
            await (0, vitest_1.expect)(service.getUnitById(999)).rejects.toThrow("Unit not found");
        });
    });
});
