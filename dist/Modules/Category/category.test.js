"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const category_service_1 = require("./category.service");
const category_repository_1 = require("./category.repository");
vitest_1.vi.mock('./category.repository');
vitest_1.vi.mock('../../Shared/Prisma', () => ({
    prisma: {}
}));
(0, vitest_1.describe)('CategoryService', () => {
    let service;
    let repository;
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
        repository = new category_repository_1.CategoryRepository();
        service = new category_service_1.CategoryService(repository);
    });
    const mockCategory = {
        Id: 1,
        Name: 'Test Category',
        Description: 'Test Description',
    };
    (0, vitest_1.describe)('createCategory', () => {
        (0, vitest_1.it)('should create a category if user is admin (id 1)', async () => {
            const categoryDto = {
                Name: 'Test Category',
                Description: 'Test Description',
            };
            repository.createCategory.mockResolvedValue(mockCategory);
            const result = await service.createCategory(1, categoryDto);
            (0, vitest_1.expect)(result).toEqual(mockCategory);
            (0, vitest_1.expect)(repository.createCategory).toHaveBeenCalledWith(categoryDto);
        });
        (0, vitest_1.it)('should throw 403 error if user is not admin', async () => {
            const categoryDto = {
                Name: 'Test Category',
                Description: 'Test Description',
            };
            await (0, vitest_1.expect)(service.createCategory(2, categoryDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            (0, vitest_1.expect)(repository.createCategory).not.toHaveBeenCalled();
        });
    });
    (0, vitest_1.describe)('getCategories', () => {
        (0, vitest_1.it)('should return categories', async () => {
            const query = { name: 'Test' };
            const page = 1;
            const limit = 10;
            repository.findAll.mockResolvedValue([mockCategory]);
            const result = await service.getCategories(query, page, limit);
            (0, vitest_1.expect)(result).toEqual([mockCategory]);
            (0, vitest_1.expect)(repository.findAll).toHaveBeenCalledWith(query, page, limit);
        });
    });
    (0, vitest_1.describe)('getCategoryById', () => {
        (0, vitest_1.it)('should return a category by id', async () => {
            repository.findById.mockResolvedValue(mockCategory);
            const result = await service.getCategoryById(1);
            (0, vitest_1.expect)(result).toEqual(mockCategory);
            (0, vitest_1.expect)(repository.findById).toHaveBeenCalledWith(1);
        });
        (0, vitest_1.it)('should throw 404 if category not found', async () => {
            repository.findById.mockResolvedValue(null);
            await (0, vitest_1.expect)(service.getCategoryById(999)).rejects.toThrow("Category not found");
        });
    });
});
