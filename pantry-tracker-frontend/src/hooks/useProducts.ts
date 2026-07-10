import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productsService } from '@/services/products.service';
import type { CreateProductRequest, UpdateProductRequest, ProductQuery } from '@/types/product.types';
import { toast } from 'sonner';

export const useProducts = (params?: ProductQuery) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productsService.getAll(params),
    staleTime: 1000 * 60 * 2,
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => productsService.getById(id),
    enabled: !!id,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateProductRequest) => productsService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Producto creado exitosamente');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al crear el producto');
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateProductRequest }) =>
      productsService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Producto actualizado');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al actualizar el producto');
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => productsService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Producto eliminado');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al eliminar el producto');
    },
  });
};
