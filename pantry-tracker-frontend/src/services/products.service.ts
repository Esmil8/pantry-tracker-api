import api from './api';
import type {
  Product,
  CreateProductRequest,
  UpdateProductRequest,
  ProductListResponse,
  ProductQuery,
} from '@/types/product.types';

export const productsService = {
  getAll: async (params?: ProductQuery): Promise<Product[]> => {
    const res = await api.get<ProductListResponse>('/products', { params });
    return res.data.Data;
  },

  getById: async (id: number): Promise<Product> => {
    const res = await api.get<{ Data: Product }>(`/products/${id}`);
    return res.data.Data;
  },

  create: async (data: CreateProductRequest): Promise<{ Message: string }> => {
    const res = await api.post<{ Message: string }>('/products', data);
    return res.data;
  },

  update: async (id: number, data: UpdateProductRequest): Promise<{ Message: string }> => {
    const res = await api.put<{ Message: string }>(`/products/${id}`, data);
    return res.data;
  },

  delete: async (id: number): Promise<{ Message: string }> => {
    const res = await api.delete<{ Message: string }>(`/products/${id}`);
    return res.data;
  },
};
