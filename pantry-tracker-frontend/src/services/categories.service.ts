import api from './api';
import type {
  Category,
  CreateCategoryRequest,
  CategoryListResponse,
} from '@/types/category.types';

export const categoriesService = {
  getAll: async (params?: { name?: string; description?: string; page?: number; limit?: number }): Promise<Category[]> => {
    const res = await api.get<CategoryListResponse>('/categories', { params });
    return res.data.Data ?? [];
  },

  getById: async (id: number): Promise<Category> => {
    const res = await api.get<{ Data: Category }>(`/categories/${id}`);
    return res.data.Data;
  },

  create: async (data: CreateCategoryRequest): Promise<{ Message: string }> => {
    const res = await api.post<{ Message: string }>('/categories', data);
    return res.data;
  },
};
