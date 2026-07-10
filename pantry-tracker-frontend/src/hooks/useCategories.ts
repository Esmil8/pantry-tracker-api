import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoriesService } from '@/services/categories.service';
import type { CreateCategoryRequest } from '@/types/category.types';
import { toast } from 'sonner';

export const useCategories = (params?: { name?: string; description?: string; page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ['categories', params],
    queryFn: () => categoriesService.getAll(params),
    staleTime: 1000 * 60 * 5,
  });
};

export const useCategory = (id: number) => {
  return useQuery({
    queryKey: ['categories', id],
    queryFn: () => categoriesService.getById(id),
    enabled: !!id,
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateCategoryRequest) => categoriesService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast.success('Categoría creada exitosamente');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al crear la categoría');
    },
  });
};
