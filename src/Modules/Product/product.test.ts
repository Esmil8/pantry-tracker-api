import { describe, it, expect, vi, beforeEach, Mocked } from 'vitest';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { CreateProductDto, UpdateProductDto, GetProductsQueryDto } from './product.schema';

// Mock the ProductRepository and Prisma
vi.mock('./product.repository');
vi.mock('../../Shared/Prisma', () => ({
    prisma: {}
}));

describe('ProductService', () => {
    let service: ProductService;
    let repository: Mocked<ProductRepository>;

    beforeEach(() => {
        // Clear all mocks before each test
        vi.clearAllMocks();

        repository = new ProductRepository() as Mocked<ProductRepository>;
        service = new ProductService(repository);
    });

    const mockProduct = {
        Id: 1,
        Name: 'Test Product',
        Description: 'Test Description',
        Brand: 'Test Brand',
        BarCode: '123456789',
        CategoryId: 1,
        UnitId: 1
    };

    describe('createProduct', () => {
        it('should create a product if user is admin (id 1)', async () => {
            const productDto: CreateProductDto = {
                Name: 'Test Product',
                Description: 'Test Description',
                Brand: 'Test Brand',
                BarCode: '123456789',
                CategoryId: 1,
                UnitId: 1
            };

            repository.createProduct.mockResolvedValue(mockProduct as any);

            const result = await service.createProduct(1, productDto);

            expect(result).toEqual(mockProduct);
            expect(repository.createProduct).toHaveBeenCalledWith(productDto);
        });

        it('should throw 403 error if user is not admin', async () => {
            const productDto: CreateProductDto = {
                Name: 'Test Product',
                Description: 'Test Description',
                Brand: 'Test Brand',
                BarCode: '123456789',
                CategoryId: 1,
                UnitId: 1
            };

            await expect(service.createProduct(2, productDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");

            try {
                await service.createProduct(2, productDto);
            } catch (error: any) {
                expect(error.statusCode).toBe(403);
            }
            expect(repository.createProduct).not.toHaveBeenCalled();
        });
    });

    describe('getProducts', () => {
        it('should return products', async () => {
            const query: GetProductsQueryDto = { name: 'Test' };
            const page = 1;
            const limit = 10;

            repository.getProducts.mockResolvedValue([mockProduct] as any);

            const result = await service.getProducts(query, page, limit);

            expect(result).toEqual([mockProduct]);
            expect(repository.getProducts).toHaveBeenCalledWith(query, page, limit);
        });
    });

    describe('getProductById', () => {
        it('should return a product by id', async () => {
            repository.getProductById.mockResolvedValue(mockProduct as any);

            const result = await service.getProductById(1);

            expect(result).toEqual(mockProduct);
            expect(repository.getProductById).toHaveBeenCalledWith(1);
        });
    });

    describe('updateProduct', () => {
        it('should update a product if user is admin (id 1)', async () => {
            const productDto: UpdateProductDto = { Name: 'Updated Product' };
            const updatedProduct = { ...mockProduct, Name: 'Updated Product' };

            repository.updateProduct.mockResolvedValue(updatedProduct as any);

            const result = await service.updateProduct(1, 1, productDto);

            expect(result).toEqual(updatedProduct);
            expect(repository.updateProduct).toHaveBeenCalledWith(1, productDto);
        });

        it('should throw 403 error if user is not admin', async () => {
            const productDto: UpdateProductDto = { Name: 'Updated Product' };

            await expect(service.updateProduct(2, 1, productDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");

            try {
                await service.updateProduct(2, 1, productDto);
            } catch (error: any) {
                expect(error.statusCode).toBe(403);
            }
            expect(repository.updateProduct).not.toHaveBeenCalled();
        });
    });

    describe('deleteProduct', () => {
        it('should delete a product if user is admin (id 1)', async () => {
            repository.deleteProduct.mockResolvedValue(mockProduct as any);

            const result = await service.deleteProduct(1, 1);

            expect(result).toEqual(mockProduct);
            expect(repository.deleteProduct).toHaveBeenCalledWith(1);
        });

        it('should throw 403 error if user is not admin', async () => {
            await expect(service.deleteProduct(2, 1)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");

            try {
                await service.deleteProduct(2, 1);
            } catch (error: any) {
                expect(error.statusCode).toBe(403);
            }
            expect(repository.deleteProduct).not.toHaveBeenCalled();
        });
    });
});
