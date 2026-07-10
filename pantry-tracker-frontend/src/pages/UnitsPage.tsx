import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Search, Ruler, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useUnits, useCreateUnit } from '@/hooks/useUnits';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { PageLoader } from '@/components/ui/Spinner';
import { formatDate } from '@/utils/helpers';
import type { Unit } from '@/types/unit.types';

const unitSchema = z.object({
  Name: z.string().min(1, 'El nombre es requerido').max(100),
  Abbreviation: z.string().min(1, 'La abreviación es requerida').max(10),
});
type UnitForm = z.infer<typeof unitSchema>;

export default function UnitsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [page, setPage] = useState(1);
  const [unitsList, setUnitsList] = useState<Unit[]>([]);
  const limit = 10;

  const { data: units, isLoading, isFetching } = useUnits({ page, limit });
  const createUnit = useCreateUnit();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UnitForm>({
    resolver: zodResolver(unitSchema),
  });

  // Handle appending units
  useEffect(() => {
    if (units) {
      if (page === 1) {
        setUnitsList(units);
      } else {
        setUnitsList((prev) => {
          const newItemsMap = new Map(units.map((u) => [u.Id, u]));
          const updatedPrev = prev.map((u) =>
            newItemsMap.has(u.Id) ? newItemsMap.get(u.Id)! : u
          );
          const existingIds = new Set(updatedPrev.map((u) => u.Id));
          const onlyNew = units.filter((u) => !existingIds.has(u.Id));
          return [...updatedPrev, ...onlyNew];
        });
      }
    }
  }, [units, page]);

  const filtered = useMemo(() =>
    unitsList.filter(u =>
      u.Name.toLowerCase().includes(search.toLowerCase()) ||
      u.Abbreviation.toLowerCase().includes(search.toLowerCase())
    ), [unitsList, search]);

  const onSubmit = async (data: UnitForm) => {
    await createUnit.mutateAsync(data);
    reset();
    setShowModal(false);
    setPage(1);
  };

  const hasMore = units && units.length === limit;

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
            <h1 className="text-2xl font-semibold text-ink tracking-tight">Unidades de Medida</h1>
            <p className="text-sm text-mute mt-0.5">{unitsList.length} unidades registradas</p>
          </div>
        </div>
        <Button
          variant="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => { setShowModal(true); reset(); }}
          id="create-unit-btn"
        >
          Nueva unidad
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
        <input
          type="text"
          placeholder="Buscar unidades..."
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
                <th>Abreviación</th>
                <th>Creado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((unit) => (
                <tr key={unit.Id}>
                  <td className="text-mute font-mono text-xs">{unit.Id}</td>
                  <td className="font-medium text-ink">{unit.Name}</td>
                  <td>
                    <code className="font-mono text-xs bg-hairline-soft px-1.5 py-0.5 rounded">
                      {unit.Abbreviation}
                    </code>
                  </td>
                  <td className="text-mute">{formatDate(unit.CreatedDate)}</td>
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
            <Ruler className="w-6 h-6 text-mute" />
          </div>
          <p className="text-sm font-medium text-ink mb-1">
            {search ? 'Sin resultados' : 'Sin unidades todavía'}
          </p>
          <p className="text-xs text-mute mb-4">
            {search ? `No hay unidades con "${search}"` : 'Crea unidades de medida para tus productos'}
          </p>
          {!search && (
            <Button variant="sm" leftIcon={<Plus className="w-4 h-4" />} onClick={() => setShowModal(true)}>
              Crear unidad
            </Button>
          )}
        </div>
      )}

      {/* Create Modal */}
      <Modal open={showModal} onClose={() => { setShowModal(false); reset(); }} title="Nueva Unidad" size="sm">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Nombre"
            placeholder="Ej: Kilogramo, Litro..."
            required
            error={errors.Name?.message}
            {...register('Name')}
          />
          <Input
            label="Abreviación"
            placeholder="Ej: kg, L, g..."
            required
            error={errors.Abbreviation?.message}
            {...register('Abbreviation')}
          />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => { setShowModal(false); reset(); }}>
              Cancelar
            </Button>
            <Button variant="sm" type="submit" loading={createUnit.isPending}>
              Crear
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
