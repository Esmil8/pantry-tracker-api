import api from './api';
import type { LoginRequest, RegisterRequest, AuthResponse } from '@/types/auth.types';

export const authService = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>('/auth/login', data);
    return res.data;
  },

  register: async (data: RegisterRequest): Promise<{ Message: string }> => {
    const res = await api.post<{ Message: string }>('/auth/register', data);
    return res.data;
  },

  deleteAccount: async (PasswordHash: string): Promise<{ Message: string }> => {
    const res = await api.delete<{ Message: string }>('/auth/delete', {
      data: { PasswordHash },
    });
    return res.data;
  },
};
