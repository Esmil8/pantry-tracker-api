import { describe, it, expect, vi, beforeEach, Mocked } from 'vitest';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto, GetCategoriesQueryDto } from './category.schema';

vi.mock('./category.repository');
vi.mock('../../Shared/Prisma', () => ({
    prisma: {}
}));

describe('CategoryService', () => {
    let service: CategoryService;
    let repository: Mocked<CategoryRepository>;

    beforeEach(() => {
        vi.clearAllMocks();
        repository = new CategoryRepository() as Mocked<CategoryRepository>;
        service = new CategoryService(repository);
    });

    const mockCategory = {
        Id: 1,
        Name: 'Test Category',
        Description: 'Test Description',
    };

    describe('createCategory', () => {
        it('should create a category if user is admin (id 1)', async () => {
            const categoryDto: CreateCategoryDto = {
                Name: 'Test Category',
                Description: 'Test Description',
            };

            repository.createCategory.mockResolvedValue(mockCategory as any);

            const result = await service.createCategory(1, categoryDto);

            expect(result).toEqual(mockCategory);
            expect(repository.createCategory).toHaveBeenCalledWith(categoryDto);
        });

        it('should throw 403 error if user is not admin', async () => {
            const categoryDto: CreateCategoryDto = {
                Name: 'Test Category',
                Description: 'Test Description',
            };

            await expect(service.createCategory(2, categoryDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            expect(repository.createCategory).not.toHaveBeenCalled();
        });
    });

    describe('getCategories', () => {
        it('should return categories', async () => {
            const query: GetCategoriesQueryDto = { name: 'Test' };
            const page = 1;
            const limit = 10;

            repository.findAll.mockResolvedValue([mockCategory] as any);

            const result = await service.getCategories(query, page, limit);

            expect(result).toEqual([mockCategory]);
            expect(repository.findAll).toHaveBeenCalledWith(query, page, limit);
        });
    });

    describe('getCategoryById', () => {
        it('should return a category by id', async () => {
            repository.findById.mockResolvedValue(mockCategory as any);

            const result = await service.getCategoryById(1);

            expect(result).toEqual(mockCategory);
            expect(repository.findById).toHaveBeenCalledWith(1);
        });

        it('should throw 404 if category not found', async () => {
            repository.findById.mockResolvedValue(null as any);

            await expect(service.getCategoryById(999)).rejects.toThrow("Category not found");
        });
    });
});
