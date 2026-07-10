import api from './api';
import type {
  Pantry,
  PantryItem,
  CreatePantryRequest,
  AddPantryItemRequest,
  UpdatePantryItemRequest,
  PantryListResponse,
  PantryItemsResponse,
  PantryItemsQuery,
} from '@/types/pantry.types';

export const pantryService = {
  getByUser: async (userId: number, page = 1, limit = 20): Promise<Pantry[]> => {
    console.log(`[pantry.service] GET /pantry/${userId}?page=${page}&limit=${limit}`);
    const res = await api.get<PantryListResponse>(`/pantry/${userId}`, { params: { page, limit } });
    console.log('[pantry.service] Status:', res.status, '| Raw Data:', res.data);
    // Backend returns { Status, Data: { message, pantries } }
    return res.data.Data?.pantries ?? [];
  },

  create: async (data: CreatePantryRequest): Promise<{ Message: string }> => {
    const res = await api.post<{ Message: string }>('/pantry', data);
    return res.data;
  },

  getItems: async (pantryId: number, params?: PantryItemsQuery): Promise<PantryItem[]> => {
    const res = await api.get<PantryItemsResponse>(`/pantry/${pantryId}/items`, { params });
    return res.data.Data;
  },

  addItem: async (pantryId: number, data: AddPantryItemRequest): Promise<{ Message: string }> => {
    const res = await api.post<{ Message: string }>(`/pantry/${pantryId}/items`, data);
    return res.data;
  },

  updateItem: async (
    pantryId: number,
    itemId: number,
    data: UpdatePantryItemRequest
  ): Promise<{ Message: string }> => {
    const res = await api.put<{ Message: string }>(`/pantry/${pantryId}/items/${itemId}`, data);
    return res.data;
  },

  deleteItem: async (pantryId: number, itemId: number): Promise<{ Message: string }> => {
    const res = await api.delete<{ Message: string }>(`/pantry/${pantryId}/items/${itemId}`);
    return res.data;
  },
};
