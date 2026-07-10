import type { PantryItemStatus } from '@/types/pantry.types';

export interface StatusConfig {
  label: string;
  className: string;
  dotColor: string;
}

export const getStatusConfig = (status: PantryItemStatus): StatusConfig => {
  if (status === 'EXPIRED') {
    return { label: 'Expirado', className: 'bg-red-50 text-danger border border-red-200', dotColor: 'bg-danger' };
  }
  if (status === 'EXPIRING_TODAY') {
    return { label: 'Expira hoy', className: 'bg-red-50 text-danger-deep border border-red-200', dotColor: 'bg-danger-deep' };
  }
  if (status.startsWith('CRITICAL')) {
    const days = status.match(/(\d+)/)?.[1] ?? '?';
    return {
      label: `Crítico (${days}d)`,
      className: 'bg-orange-50 text-warning-deep border border-orange-200',
      dotColor: 'bg-warning-deep',
    };
  }
  if (status.startsWith('EXPIRING_IN')) {
    const days = status.match(/(\d+)/)?.[1] ?? '?';
    return {
      label: `Vence en ${days}d`,
      className: 'bg-yellow-50 text-warning-deep border border-yellow-200',
      dotColor: 'bg-warning',
    };
  }
  if (status === 'FRESH') {
    return { label: 'Fresco', className: 'bg-blue-50 text-link border border-blue-200', dotColor: 'bg-link' };
  }
  // NO_EXPIRATION
  return { label: 'Sin vencimiento', className: 'bg-hairline-soft text-mute border border-hairline', dotColor: 'bg-mute' };
};

export const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
};

export const getErrorMessage = (err: unknown): string => {
  if (err && typeof err === 'object' && 'response' in err) {
    const axiosErr = err as any;
    return (
      axiosErr.response?.data?.Message ??
      axiosErr.response?.data?.message ??
      axiosErr.message ??
      'Error inesperado'
    );
  }
  if (err instanceof Error) return err.message;
  return 'Error inesperado';
};
