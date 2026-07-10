import api from './api';
import type { Unit, CreateUnitRequest, UnitListResponse } from '@/types/unit.types';

export const unitsService = {
  getAll: async (params?: { name?: string; abbreviation?: string; page?: number; limit?: number }): Promise<Unit[]> => {
    const res = await api.get<UnitListResponse>('/units', { params });
    return res.data.Data ?? [];
  },

  getById: async (id: number): Promise<Unit> => {
    const res = await api.get<{ Data: Unit }>(`/units/${id}`);
    return res.data.Data;
  },

  create: async (data: CreateUnitRequest): Promise<{ Message: string }> => {
    const res = await api.post<{ Message: string }>('/units', data);
    return res.data;
  },
};
