import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Plus, Search, ShoppingBasket, ChevronRight, RefreshCw, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '@/store/auth.store';
import { usePantries, useCreatePantry } from '@/hooks/usePantry';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { PageLoader } from '@/components/ui/Spinner';
import { formatDate } from '@/utils/helpers';
import type { Pantry } from '@/types/pantry.types';

const createPantrySchema = z.object({
  Name: z.string().min(1, 'El nombre es requerido').max(100),
});
type CreatePantryForm = z.infer<typeof createPantrySchema>;
const LIMIT = 20;

export default function PantryPage() {
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const statusFromUrl = searchParams.get('status') ?? '';

  const [page, setPage] = useState(1);
  const [pantriesList, setPantriesList] = useState<Pantry[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');

  const { data: pantries, isLoading, isFetching, isError, error } = usePantries(user?.id ?? 0, page, LIMIT);
  const createPantry = useCreatePantry();

  // Append pages to the accumulated list
  useEffect(() => {
    if (pantries) {
      if (page === 1) {
        setPantriesList(pantries);
      } else {
        setPantriesList((prev) => {
          const existingIds = new Set(prev.map((p) => p.Id));
          const onlyNew = pantries.filter((p) => !existingIds.has(p.Id));
          return [...prev, ...onlyNew];
        });
      }
    }
  }, [pantries, page]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreatePantryForm>({
    resolver: zodResolver(createPantrySchema),
  });

  const onSubmit = async (data: CreatePantryForm) => {
    await createPantry.mutateAsync(data);
    reset();
    setShowModal(false);
    setPage(1);
  };

  const filtered = useMemo(() =>
    pantriesList.filter(p =>
      p.Name.toLowerCase().includes(search.toLowerCase())
    ), [pantriesList, search]);

  const hasMore = pantries && pantries.length === LIMIT;

  if (isLoading && page === 1) return <PageLoader />;

  // If there's an auth issue (userId = 0), show a helpful message
  if (!user) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="geist-card p-12 flex flex-col items-center text-center">
          <p className="text-sm font-medium text-ink mb-1">Sesión no encontrada</p>
          <p className="text-xs text-mute">Por favor cierra sesión y vuelve a iniciar sesión.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
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
            <p className="eyebrow mb-1">Gestión</p>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">Mis Despensas</h1>
            <p className="text-sm text-mute mt-0.5">
              {pantriesList.length} despensa{pantriesList.length !== 1 ? 's' : ''} registrada{pantriesList.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <Button
          variant="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => setShowModal(true)}
          id="create-pantry-btn"
        >
          Nueva despensa
        </Button>
      </div>

      {/* Error state */}
      {isError && (
        <div className="geist-card p-4 mb-6 border border-red-200 bg-red-50">
          <p className="text-sm text-red-600 font-medium">Error al cargar despensas</p>
          <p className="text-xs text-red-400 mt-1">{(error as any)?.message}</p>
        </div>
      )}

      {/* Search */}
      {pantriesList.length > 0 && (
        <div className="relative mb-6 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
          <input
            type="text"
            placeholder="Buscar despensas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="geist-input pl-9"
          />
        </div>
      )}

      {/* Status filter banner */}
      {statusFromUrl && (
        <div className="mb-4 px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-md flex items-center justify-between">
          <p className="text-xs text-yellow-800 font-medium">
            {
              statusFromUrl === 'EXPIRED' ? 'ℹ️ Toca una despensa para ver sus productos expirados' :
              statusFromUrl === 'EXPIRING_IN_7_DAYS' ? 'ℹ️ Toca una despensa para ver sus productos por vencer' :
              'ℹ️ Toca una despensa para ver los productos filtrados'
            }
          </p>
        </div>
      )}

      {/* List */}
      {filtered.length > 0 ? (
        <div className="geist-card overflow-hidden">
          <ul className="divide-y divide-hairline">
            {filtered.map((pantry) => (
              <li key={pantry.Id}>
                <Link
                  to={statusFromUrl ? `/pantry/${pantry.Id}?status=${statusFromUrl}` : `/pantry/${pantry.Id}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-hairline-soft transition-colors group"
                >
                  <div className="w-10 h-10 rounded-sm bg-hairline-soft flex items-center justify-center flex-shrink-0 group-hover:bg-ink group-hover:text-white transition-colors">
                    <ShoppingBasket className="w-5 h-5 text-mute group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink">{pantry.Name}</p>
                    <p className="text-xs text-mute mt-0.5">
                      Creada el {formatDate(pantry.CreatedDate)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-mute">
                      {statusFromUrl === 'EXPIRED' ? 'Ver expirados' : statusFromUrl === 'EXPIRING_IN_7_DAYS' ? 'Ver por vencer' : 'Ver items'}
                    </span>
                    <ChevronRight className="w-4 h-4 text-hairline group-hover:text-mute transition-colors" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {/* Load More button */}
          {hasMore && !search && (
            <div className="flex justify-center p-4 border-t border-hairline bg-elevated-soft">
              <Button
                variant="ghost-sm"
                onClick={() => setPage(p => p + 1)}
                loading={isFetching}
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
              >
                Cargar más despensas
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="geist-card p-12 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-md bg-hairline-soft flex items-center justify-center mb-4">
            <ShoppingBasket className="w-6 h-6 text-mute" />
          </div>
          <h2 className="text-sm font-semibold text-ink mb-1">
            {search ? 'Sin resultados' : 'Sin despensas todavía'}
          </h2>
          <p className="text-xs text-mute mb-4">
            {search
              ? `No hay despensas con "${search}"`
              : 'Crea tu primera despensa para comenzar a organizar tus productos'}
          </p>
          {!search && (
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="sm"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={() => setShowModal(true)}
              >
                Crear despensa
              </Button>
              <Button
                variant="ghost-sm"
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
                onClick={() => setPage(1)}
                loading={isFetching}
              >
                Cargar despensas
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Create Modal */}
      <Modal open={showModal} onClose={() => { setShowModal(false); reset(); }} title="Nueva Despensa" size="sm">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Nombre de la despensa"
            placeholder="Ej: Despensa principal"
            required
            error={errors.Name?.message}
            {...register('Name')}
          />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => { setShowModal(false); reset(); }}>
              Cancelar
            </Button>
            <Button variant="sm" type="submit" loading={createPantry.isPending}>
              Crear
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

