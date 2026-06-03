"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const product_service_1 = require("./product.service");
const product_repository_1 = require("./product.repository");
vitest_1.vi.mock('./product.repository');
vitest_1.vi.mock('../../Shared/Prisma', () => ({
    prisma: {}
}));
(0, vitest_1.describe)('ProductService', () => {
    let service;
    let repository;
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
        repository = new product_repository_1.ProductRepository();
        service = new product_service_1.ProductService(repository);
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
    (0, vitest_1.describe)('createProduct', () => {
        (0, vitest_1.it)('should create a product if user is admin (id 1)', async () => {
            const productDto = {
                Name: 'Test Product',
                Description: 'Test Description',
                Brand: 'Test Brand',
                BarCode: '123456789',
                CategoryId: 1,
                UnitId: 1
            };
            repository.createProduct.mockResolvedValue(mockProduct);
            const result = await service.createProduct(1, productDto);
            (0, vitest_1.expect)(result).toEqual(mockProduct);
            (0, vitest_1.expect)(repository.createProduct).toHaveBeenCalledWith(productDto);
        });
        (0, vitest_1.it)('should throw 403 error if user is not admin', async () => {
            const productDto = {
                Name: 'Test Product',
                Description: 'Test Description',
                Brand: 'Test Brand',
                BarCode: '123456789',
                CategoryId: 1,
                UnitId: 1
            };
            await (0, vitest_1.expect)(service.createProduct(2, productDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            try {
                await service.createProduct(2, productDto);
            }
            catch (error) {
                (0, vitest_1.expect)(error.statusCode).toBe(403);
            }
            (0, vitest_1.expect)(repository.createProduct).not.toHaveBeenCalled();
        });
    });
    (0, vitest_1.describe)('getProducts', () => {
        (0, vitest_1.it)('should return products', async () => {
            const query = { name: 'Test' };
            const page = 1;
            const limit = 10;
            repository.getProducts.mockResolvedValue([mockProduct]);
            const result = await service.getProducts(query, page, limit);
            (0, vitest_1.expect)(result).toEqual([mockProduct]);
            (0, vitest_1.expect)(repository.getProducts).toHaveBeenCalledWith(query, page, limit);
        });
    });
    (0, vitest_1.describe)('getProductById', () => {
        (0, vitest_1.it)('should return a product by id', async () => {
            repository.getProductById.mockResolvedValue(mockProduct);
            const result = await service.getProductById(1);
            (0, vitest_1.expect)(result).toEqual(mockProduct);
            (0, vitest_1.expect)(repository.getProductById).toHaveBeenCalledWith(1);
        });
    });
    (0, vitest_1.describe)('updateProduct', () => {
        (0, vitest_1.it)('should update a product if user is admin (id 1)', async () => {
            const productDto = { Name: 'Updated Product' };
            const updatedProduct = { ...mockProduct, Name: 'Updated Product' };
            repository.updateProduct.mockResolvedValue(updatedProduct);
            const result = await service.updateProduct(1, 1, productDto);
            (0, vitest_1.expect)(result).toEqual(updatedProduct);
            (0, vitest_1.expect)(repository.updateProduct).toHaveBeenCalledWith(1, productDto);
        });
        (0, vitest_1.it)('should throw 403 error if user is not admin', async () => {
            const productDto = { Name: 'Updated Product' };
            await (0, vitest_1.expect)(service.updateProduct(2, 1, productDto)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            try {
                await service.updateProduct(2, 1, productDto);
            }
            catch (error) {
                (0, vitest_1.expect)(error.statusCode).toBe(403);
            }
            (0, vitest_1.expect)(repository.updateProduct).not.toHaveBeenCalled();
        });
    });
    (0, vitest_1.describe)('deleteProduct', () => {
        (0, vitest_1.it)('should delete a product if user is admin (id 1)', async () => {
            repository.deleteProduct.mockResolvedValue(mockProduct);
            const result = await service.deleteProduct(1, 1);
            (0, vitest_1.expect)(result).toEqual(mockProduct);
            (0, vitest_1.expect)(repository.deleteProduct).toHaveBeenCalledWith(1);
        });
        (0, vitest_1.it)('should throw 403 error if user is not admin', async () => {
            await (0, vitest_1.expect)(service.deleteProduct(2, 1)).rejects.toThrow("Unauthorized: This action is only allowed for administrators");
            try {
                await service.deleteProduct(2, 1);
            }
            catch (error) {
                (0, vitest_1.expect)(error.statusCode).toBe(403);
            }
            (0, vitest_1.expect)(repository.deleteProduct).not.toHaveBeenCalled();
        });
    });
});
