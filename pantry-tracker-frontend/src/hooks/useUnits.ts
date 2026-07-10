import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { unitsService } from '@/services/units.service';
import type { CreateUnitRequest } from '@/types/unit.types';
import { toast } from 'sonner';

export const useUnits = (params?: { name?: string; abbreviation?: string; page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ['units', params],
    queryFn: () => unitsService.getAll(params),
    staleTime: 1000 * 60 * 5,
  });
};

export const useUnit = (id: number) => {
  return useQuery({
    queryKey: ['units', id],
    queryFn: () => unitsService.getById(id),
    enabled: !!id,
  });
};

export const useCreateUnit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateUnitRequest) => unitsService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['units'] });
      toast.success('Unidad creada exitosamente');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Error al crear la unidad');
    },
  });
};
