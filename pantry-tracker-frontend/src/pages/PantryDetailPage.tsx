import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Plus, ArrowLeft, Pencil, Trash2, Search, Filter, RefreshCw } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  usePantryItems,
  useAddPantryItem,
  useUpdatePantryItem,
  useDeletePantryItem,
} from '@/hooks/usePantry';
import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/Button';
import { Input, Select, Textarea } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { StatusBadge } from '@/components/ui/Badge';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PageLoader } from '@/components/ui/Spinner';
import { formatDate } from '@/utils/helpers';
import type { PantryItem, PantryStatusFilter } from '@/types/pantry.types';

const selectInt = z
  .string({ error: 'Selecciona una opción' })
  .min(1, 'Selecciona una opción')
  .transform((v) => parseInt(v, 10))
  .pipe(z.number().int().positive());

const addItemSchema = z.object({
  ProductId: selectInt,
  Quantity: z.string().min(1, 'Cantidad requerida').transform(Number).pipe(z.number().positive('Cantidad debe ser mayor a 0')),
  ExpirationDate: z.string().optional(),
  Location: z.string().max(255).optional(),
  Notes: z.string().max(500).optional(),
});

type AddItemInput = {
  ProductId: string;
  Quantity: string;
  ExpirationDate?: string;
  Location?: string;
  Notes?: string;
};
type AddItemForm = z.infer<typeof addItemSchema>;

const STATUS_FILTERS: { value: PantryStatusFilter | ''; label: string }[] = [
  { value: '', label: 'Todos los estados' },
  { value: 'EXPIRED', label: 'Expirados' },
  { value: 'EXPIRING_TODAY', label: 'Expiran hoy' },
  { value: 'CRITICAL', label: 'Críticos (1-3d)' },
  { value: 'EXPIRING_IN_7_DAYS', label: 'Próximos 7 días' },
  { value: 'FRESH', label: 'Frescos' },
];

export default function PantryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const pantryId = Number(id);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [statusFilter, setStatusFilter] = useState<PantryStatusFilter | ''>(
    (searchParams.get('status') as PantryStatusFilter) || ''
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [itemsList, setItemsList] = useState<PantryItem[]>([]);
  const LIMIT = 20;

  // Keep state in sync with URL search params changes (e.g. back navigation)
  useEffect(() => {
    const urlStatus = (searchParams.get('status') as PantryStatusFilter) || '';
    if (urlStatus !== statusFilter) {
      setStatusFilter(urlStatus);
      setPage(1);
    }
  }, [searchParams]);

  const handleStatusFilterChange = (val: PantryStatusFilter | '') => {
    setStatusFilter(val);
    setPage(1);
    if (val) {
      setSearchParams({ status: val });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setPage(1);
  };

  const [showAddModal, setShowAddModal] = useState(false);
  const [editItem, setEditItem] = useState<PantryItem | null>(null);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  const { data: items, isLoading, isFetching } = usePantryItems(pantryId, {
    status: statusFilter || undefined,
    ProductName: searchTerm || undefined,
    page,
    limit: LIMIT,
  });

  // Append new items to the page list
  useEffect(() => {
    if (items) {
      if (page === 1) {
        setItemsList(items);
      } else {
        setItemsList((prev) => {
          const existingIds = new Set(prev.map((i) => i.Id));
          const onlyNew = items.filter((i) => !existingIds.has(i.Id));
          return [...prev, ...onlyNew];
        });
      }
    }
  }, [items, page]);

  const { data: products } = useProducts();
  const addItem = useAddPantryItem(pantryId);
  const updateItem = useUpdatePantryItem(pantryId);
  const deleteItem = useDeletePantryItem(pantryId);

  const productOptions = useMemo(() =>
    products?.map(p => ({ value: p.Id, label: `${p.Name} — ${p.Brand}` })) ?? [],
    [products]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddItemInput, unknown, AddItemForm>({ resolver: zodResolver(addItemSchema) as any });

  const {
    register: registerEdit,
    handleSubmit: handleEditSubmit,
    reset: resetEdit,
    formState: { errors: editErrors },
  } = useForm<AddItemInput, unknown, AddItemForm>({ resolver: zodResolver(addItemSchema) as any });

  const onAddSubmit = async (data: AddItemForm) => {
    await addItem.mutateAsync({
      ProductId: data.ProductId,
      Quantity: data.Quantity,
      ExpirationDate: data.ExpirationDate || undefined,
      Location: data.Location || null,
      Notes: data.Notes || null,
    });
    reset();
    setShowAddModal(false);
    setPage(1);
  };

  const openEditModal = (item: PantryItem) => {
    setEditItem(item);
    resetEdit({
      ProductId: String(item.ProductId),
      Quantity: String(item.Quantity),
      ExpirationDate: item.ExpirationDate ? item.ExpirationDate.split('T')[0] : '',
      Location: item.Location ?? '',
      Notes: item.Notes ?? '',
    });
  };

  const onEditSubmit = async (data: AddItemForm) => {
    if (!editItem) return;
    await updateItem.mutateAsync({
      itemId: editItem.Id,
      data: {
        ProductId: data.ProductId,
        Quantity: data.Quantity,
        ExpirationDate: data.ExpirationDate || undefined,
        Location: data.Location || null,
        Notes: data.Notes || null,
      },
    });
    setEditItem(null);
    setPage(1);
  };

  const handleDelete = async () => {
    if (!deleteItemId) return;
    await deleteItem.mutateAsync(deleteItemId);
    setDeleteItemId(null);
    setPage(1);
  };

  if (isLoading) return <PageLoader />;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="btn-ghost-sm px-2"
            aria-label="Volver al dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <p className="eyebrow mb-1">Despensa #{pantryId}</p>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">Inventario</h1>
            <p className="text-sm text-mute mt-0.5">
              {itemsList.length} item{itemsList.length !== 1 ? 's' : ''} cargados
            </p>
          </div>
        </div>
        <Button
          variant="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => { setShowAddModal(true); reset(); }}
          id="add-pantry-item-btn"
        >
          Agregar item
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="geist-input pl-9 w-56"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-mute" />
          <select
            value={statusFilter}
            onChange={(e) => handleStatusFilterChange(e.target.value as PantryStatusFilter | '')}
            className="geist-input text-sm"
          >
            {STATUS_FILTERS.map(f => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      {itemsList.length > 0 ? (
        <div className="geist-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="geist-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Marca</th>
                  <th>Cantidad</th>
                  <th>Vencimiento</th>
                  <th>Ubicación</th>
                  <th>Estado</th>
                  <th>Notas</th>
                  <th className="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {itemsList.map((item) => (
                  <tr key={item.Id}>
                    <td className="font-medium text-ink">{item.Product.Name}</td>
                    <td className="text-mute">{item.Product.Brand}</td>
                    <td className="font-medium text-ink">{item.Quantity}</td>
                    <td>{formatDate(item.ExpirationDate)}</td>
                    <td className="text-mute">{item.Location ?? '—'}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="text-mute max-w-[200px] truncate">{item.Notes ?? '—'}</td>
                    <td>
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          className="btn-ghost-sm px-2"
                          onClick={() => openEditModal(item)}
                          title="Editar"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          className="btn-ghost-sm px-2 hover:bg-red-50 hover:text-danger hover:border-red-200"
                          onClick={() => setDeleteItemId(item.Id)}
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Load More button */}
          {items && items.length === LIMIT && !searchTerm && (
            <div className="flex justify-center p-4 border-t border-hairline bg-elevated-soft">
              <Button
                variant="ghost-sm"
                onClick={() => setPage(p => p + 1)}
                loading={isFetching}
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
              >
                Cargar más items
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="geist-card p-12 flex flex-col items-center text-center">
          <p className="text-sm font-medium text-ink mb-1">Sin items</p>
          <p className="text-xs text-mute mb-4">
            {statusFilter || searchTerm
              ? 'No hay items con los filtros aplicados'
              : 'Agrega productos a esta despensa'}
          </p>
          {!statusFilter && !searchTerm && (
            <Button
              variant="sm"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => setShowAddModal(true)}
            >
              Agregar item
            </Button>
          )}
        </div>
      )}

      {/* Add Item Modal */}
      <Modal
        open={showAddModal}
        onClose={() => { setShowAddModal(false); reset(); }}
        title="Agregar Item a Despensa"
        size="md"
      >
        <form onSubmit={handleSubmit(onAddSubmit)} className="flex flex-col gap-4">
          <Select
            label="Producto"
            placeholder="Selecciona un producto"
            required
            options={productOptions}
            error={errors.ProductId?.message}
            {...register('ProductId')}
          />
          <Input
            label="Cantidad"
            type="number"
            step="0.01"
            min="0.01"
            required
            placeholder="1"
            error={errors.Quantity?.message}
            {...register('Quantity')}
          />
          <Input
            label="Fecha de vencimiento"
            type="date"
            error={errors.ExpirationDate?.message}
            {...register('ExpirationDate')}
          />
          <Input
            label="Ubicación"
            placeholder="Ej: Estante 2, Refrigerador"
            error={errors.Location?.message}
            {...register('Location')}
          />
          <Textarea
            label="Notas"
            placeholder="Notas adicionales..."
            error={errors.Notes?.message}
            {...register('Notes')}
          />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => { setShowAddModal(false); reset(); }}>
              Cancelar
            </Button>
            <Button variant="sm" type="submit" loading={addItem.isPending}>
              Agregar
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit Item Modal */}
      <Modal
        open={!!editItem}
        onClose={() => setEditItem(null)}
        title="Editar Item"
        size="md"
      >
        <form onSubmit={handleEditSubmit(onEditSubmit)} className="flex flex-col gap-4">
          <Select
            label="Producto"
            placeholder="Selecciona un producto"
            required
            options={productOptions}
            error={editErrors.ProductId?.message}
            {...registerEdit('ProductId')}
          />
          <Input
            label="Cantidad"
            type="number"
            step="0.01"
            min="0.01"
            required
            error={editErrors.Quantity?.message}
            {...registerEdit('Quantity')}
          />
          <Input
            label="Fecha de vencimiento"
            type="date"
            error={editErrors.ExpirationDate?.message}
            {...registerEdit('ExpirationDate')}
          />
          <Input
            label="Ubicación"
            error={editErrors.Location?.message}
            {...registerEdit('Location')}
          />
          <Textarea
            label="Notas"
            error={editErrors.Notes?.message}
            {...registerEdit('Notes')}
          />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => setEditItem(null)}>
              Cancelar
            </Button>
            <Button variant="sm" type="submit" loading={updateItem.isPending}>
              Guardar cambios
            </Button>
          </div>
        </form>
      </Modal>

      {/* Confirm Delete */}
      <ConfirmDialog
        open={!!deleteItemId}
        onClose={() => setDeleteItemId(null)}
        onConfirm={handleDelete}
        title="Eliminar Item"
        description="¿Estás seguro de que deseas eliminar este item de la despensa? Esta acción no se puede deshacer."
        loading={deleteItem.isPending}
      />
    </div>
  );
}
