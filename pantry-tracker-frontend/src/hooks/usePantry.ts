import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { pantryService } from '@/services/pantry.service';
import type {
  CreatePantryRequest,
  AddPantryItemRequest,
  UpdatePantryItemRequest,
  PantryItemsQuery,
  Pantry,
} from '@/types/pantry.types';
import { toast } from 'sonner';

export const usePantries = (userId: number, page = 1, limit = 20) => {
  return useQuery<Pantry[], Error, Pantry[]>({
    queryKey: ['pantries', userId, page, limit],
    queryFn: async () => {
      console.log(`[usePantries] queryFn called — userId=${userId} page=${page} limit=${limit}`);
      try {
        return await pantryService.getByUser(userId, page, limit);
      } catch (err: any) {
        console.error('[usePantries] Error:', err?.response?.status, err?.message);
        // Backend returns 404 when user has no pantries yet — treat as empty list
        if (err?.response?.status === 404) return [];
        throw err;
      }
    },
    enabled: userId > 0,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

export const useCreatePantry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePantryRequest) => pantryService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pantries'] });
      toast.success('Despensa creada exitosamente');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al crear la despensa');
    },
  });
};

export const usePantryItems = (pantryId: number, params?: PantryItemsQuery) => {
  return useQuery({
    queryKey: ['pantry-items', pantryId, params],
    queryFn: () => pantryService.getItems(pantryId, params),
    enabled: !!pantryId,
    staleTime: 1000 * 60 * 2,
  });
};

export const useAddPantryItem = (pantryId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AddPantryItemRequest) => pantryService.addItem(pantryId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pantry-items', pantryId] });
      toast.success('Item agregado a la despensa');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al agregar el item');
    },
  });
};

export const useUpdatePantryItem = (pantryId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ itemId, data }: { itemId: number; data: UpdatePantryItemRequest }) =>
      pantryService.updateItem(pantryId, itemId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pantry-items', pantryId] });
      toast.success('Item actualizado exitosamente');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al actualizar el item');
    },
  });
};

export const useDeletePantryItem = (pantryId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (itemId: number) => pantryService.deleteItem(pantryId, itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pantry-items', pantryId] });
      toast.success('Item eliminado exitosamente');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al eliminar el item');
    },
  });
};
