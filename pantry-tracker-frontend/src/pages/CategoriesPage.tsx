import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Search, Tag, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCategories, useCreateCategory } from '@/hooks/useCategories';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { PageLoader } from '@/components/ui/Spinner';
import { formatDate } from '@/utils/helpers';
import type { Category } from '@/types/category.types';

const categorySchema = z.object({
  Name: z.string().min(1, 'El nombre es requerido').max(100),
  Description: z.string().max(255).default(''),
});
type CategoryFormInput = { Name: string; Description?: string };
type CategoryForm = z.infer<typeof categorySchema>;

export default function CategoriesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(1);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const limit = 10;

  const { data: categories, isLoading, isFetching } = useCategories({ page, limit });
  const createCategory = useCreateCategory();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CategoryFormInput, unknown, CategoryForm>({
    resolver: zodResolver(categorySchema) as any,
  });

  // Handle appending categories
  useEffect(() => {
    if (categories) {
      if (page === 1) {
        setCategoriesList(categories);
      } else {
        setCategoriesList((prev) => {
          const newItemsMap = new Map(categories.map((c) => [c.Id, c]));
          const updatedPrev = prev.map((c) =>
            newItemsMap.has(c.Id) ? newItemsMap.get(c.Id)! : c
          );
          const existingIds = new Set(updatedPrev.map((c) => c.Id));
          const onlyNew = categories.filter((c) => !existingIds.has(c.Id));
          return [...updatedPrev, ...onlyNew];
        });
      }
    }
  }, [categories, page]);

  const filtered = useMemo(() =>
    categoriesList.filter(c =>
      c.Name.toLowerCase().includes(search.toLowerCase()) ||
      c.Description.toLowerCase().includes(search.toLowerCase())
    ), [categoriesList, search]);

  const onSubmit = async (data: CategoryForm) => {
    await createCategory.mutateAsync({ Name: data.Name, Description: data.Description });
    reset();
    setShowModal(false);
    setPage(1);
  };

  const hasMore = categories && categories.length === limit;

  if (isLoading && page === 1) return <PageLoader />;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="btn-ghost-sm px-2 mt-1"
            aria-label="Volver al dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <p className="eyebrow mb-1">Configuración</p>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">Categorías</h1>
            <p className="text-sm text-mute mt-0.5">{categoriesList.length} categorías registradas</p>
          </div>
        </div>
        <Button
          variant="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => { setShowModal(true); reset(); }}
          id="create-category-btn"
        >
          Nueva categoría
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
        <input
          type="text"
          placeholder="Buscar categorías..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="geist-input pl-9"
        />
      </div>

      {/* Table */}
      {filtered.length > 0 ? (
        <div className="geist-card overflow-hidden">
          <table className="geist-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Creado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((cat) => (
                <tr key={cat.Id}>
                  <td className="text-mute font-mono text-xs">{cat.Id}</td>
                  <td className="font-medium text-ink">{cat.Name}</td>
                  <td className="text-mute">{cat.Description || '—'}</td>
                  <td className="text-mute">{formatDate(cat.CreatedDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {hasMore && (
            <div className="flex justify-center p-4 border-t border-hairline bg-elevated-soft">
              <Button
                variant="ghost-sm"
                onClick={() => setPage(p => p + 1)}
                loading={isFetching}
              >
                Cargar más
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="geist-card p-12 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-md bg-hairline-soft flex items-center justify-center mb-4">
            <Tag className="w-6 h-6 text-mute" />
          </div>
          <p className="text-sm font-medium text-ink mb-1">
            {search ? 'Sin resultados' : 'Sin categorías todavía'}
          </p>
          <p className="text-xs text-mute mb-4">
            {search ? `No hay categorías con "${search}"` : 'Crea categorías para organizar tus productos'}
          </p>
          {!search && (
            <Button variant="sm" leftIcon={<Plus className="w-4 h-4" />} onClick={() => setShowModal(true)}>
              Crear categoría
            </Button>
          )}
        </div>
      )}

      {/* Create Modal */}
      <Modal open={showModal} onClose={() => { setShowModal(false); reset(); }} title="Nueva Categoría" size="sm">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Nombre"
            placeholder="Ej: Lácteos, Cereales..."
            required
            error={errors.Name?.message}
            {...register('Name')}
          />
          <Input
            label="Descripción"
            placeholder="Descripción opcional"
            error={errors.Description?.message}
            {...register('Description')}
          />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => { setShowModal(false); reset(); }}>
              Cancelar
            </Button>
            <Button variant="sm" type="submit" loading={createCategory.isPending}>
              Crear
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
