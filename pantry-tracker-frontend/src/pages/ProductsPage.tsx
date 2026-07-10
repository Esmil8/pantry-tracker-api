import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Search, Pencil, Trash2, Package, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useProducts, useCreateProduct, useUpdateProduct, useDeleteProduct } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { useUnits } from '@/hooks/useUnits';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PageLoader } from '@/components/ui/Spinner';
import { Badge } from '@/components/ui/Badge';
import type { Product } from '@/types/product.types';

// Zod v4 + RHF: selects give string values, transform to number
const selectInt = z
  .string({ error: 'Selecciona una opción' })
  .min(1, 'Selecciona una opción')
  .transform((v) => parseInt(v, 10))
  .pipe(z.number().int().positive());

const productSchema = z.object({
  Name: z.string().min(1).max(100),
  Description: z.string().max(255),
  Brand: z.string().min(1).max(100),
  BarCode: z.string().min(1).max(50),
  CategoryId: selectInt,
  UnitId: selectInt,
});

// Input type for useForm (what the HTML inputs produce)
type ProductFormInput = {
  Name: string;
  Description: string;
  Brand: string;
  BarCode: string;
  CategoryId: string;
  UnitId: string;
};
// Output type after Zod transform
type ProductFormOutput = z.infer<typeof productSchema>;

export default function ProductsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null);

  const [page, setPage] = useState(1);
  const [productsList, setProductsList] = useState<Product[]>([]);
  const limit = 10;

  const { data: products, isLoading, isFetching } = useProducts({ page, limit });
  const { data: categories } = useCategories();
  const { data: units } = useUnits();
  const createProduct = useCreateProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  // Handle appending products
  useEffect(() => {
    if (products) {
      if (page === 1) {
        setProductsList(products);
      } else {
        setProductsList((prev) => {
          const newItemsMap = new Map(products.map((p) => [p.Id, p]));
          const updatedPrev = prev.map((p) =>
            newItemsMap.has(p.Id) ? newItemsMap.get(p.Id)! : p
          );
          const existingIds = new Set(updatedPrev.map((p) => p.Id));
          const onlyNew = products.filter((p) => !existingIds.has(p.Id));
          return [...updatedPrev, ...onlyNew];
        });
      }
    }
  }, [products, page]);

  const categoryOptions = useMemo(() =>
    categories?.map(c => ({ value: c.Id, label: c.Name })) ?? [], [categories]);
  const unitOptions = useMemo(() =>
    units?.map(u => ({ value: u.Id, label: `${u.Name} (${u.Abbreviation})` })) ?? [], [units]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductFormInput, unknown, ProductFormOutput>({
    resolver: zodResolver(productSchema) as any,
  });
  const { register: registerEdit, handleSubmit: handleEditSubmit, reset: resetEdit, formState: { errors: editErrors } } = useForm<ProductFormInput, unknown, ProductFormOutput>({
    resolver: zodResolver(productSchema) as any,
  });

  const filtered = useMemo(() =>
    productsList.filter(p =>
      p.Name.toLowerCase().includes(search.toLowerCase()) ||
      p.Brand.toLowerCase().includes(search.toLowerCase()) ||
      p.BarCode.toLowerCase().includes(search.toLowerCase())
    ), [productsList, search]);

  const onSubmit = async (data: ProductFormOutput) => {
    await createProduct.mutateAsync(data);
    reset();
    setShowModal(false);
    setPage(1);
  };

  const openEdit = (product: Product) => {
    setEditProduct(product);
    resetEdit({
      Name: product.Name,
      Description: product.Description,
      Brand: product.Brand,
      BarCode: product.BarCode,
      CategoryId: String(product.CategoryId),
      UnitId: String(product.UnitId),
    });
  };

  const onEditSubmit = async (data: ProductFormOutput) => {
    if (!editProduct) return;
    await updateProduct.mutateAsync({ id: editProduct.Id, data });
    setEditProduct(null);
    setPage(1);
  };

  const handleDelete = async () => {
    if (!deleteProductId) return;
    await deleteProduct.mutateAsync(deleteProductId);
    setDeleteProductId(null);
    setPage(1);
  };

  const hasMore = products && products.length === limit;

  if (isLoading && page === 1) return <PageLoader />;

  const ProductFormFields = ({
    reg, errs, catOpts, unitOpts,
  }: {
    reg: typeof register;
    errs: typeof errors;
    catOpts: typeof categoryOptions;
    unitOpts: typeof unitOptions;
  }) => (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <Input label="Nombre" required error={errs.Name?.message} {...reg('Name')} />
        <Input label="Marca" required error={errs.Brand?.message} {...reg('Brand')} />
      </div>
      <Input label="Descripción" error={errs.Description?.message} {...reg('Description')} />
      <Input label="Código de barras" required error={errs.BarCode?.message} {...reg('BarCode')} />
      <div className="grid grid-cols-2 gap-3">
        <Select label="Categoría" placeholder="Seleccionar..." required options={catOpts} error={errs.CategoryId?.message} {...reg('CategoryId', { valueAsNumber: true })} />
        <Select label="Unidad" placeholder="Seleccionar..." required options={unitOpts} error={errs.UnitId?.message} {...reg('UnitId', { valueAsNumber: true })} />
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto">
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
            <p className="eyebrow mb-1">Catálogo</p>
            <h1 className="text-2xl font-semibold text-ink tracking-tight">Productos</h1>
            <p className="text-sm text-mute mt-0.5">{products?.length ?? 0} productos registrados</p>
          </div>
        </div>
        <Button
          variant="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => { setShowModal(true); reset(); }}
          id="create-product-btn"
        >
          Nuevo producto
        </Button>
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mute" />
        <input
          type="text"
          placeholder="Buscar por nombre, marca o código..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="geist-input pl-9"
        />
      </div>

      {/* Table */}
      {filtered.length > 0 ? (
        <div className="geist-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="geist-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Código</th>
                  <th>Categoría</th>
                  <th>Unidad</th>
                  <th className="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr key={product.Id}>
                    <td>
                      <div>
                        <p className="font-medium text-ink">{product.Name}</p>
                        <p className="text-xs text-mute">{product.Description}</p>
                      </div>
                    </td>
                    <td>{product.Brand}</td>
                    <td>
                      <code className="font-mono text-xs bg-hairline-soft px-1.5 py-0.5 rounded">
                        {product.BarCode}
                      </code>
                    </td>
                    <td>
                      <Badge variant="mute">{product.Category?.Name ?? `Cat. ${product.CategoryId}`}</Badge>
                    </td>
                    <td className="text-mute">
                      {product.Unit?.Abbreviation ?? `U. ${product.UnitId}`}
                    </td>
                    <td>
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="btn-ghost-sm px-2" onClick={() => openEdit(product)} title="Editar">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          className="btn-ghost-sm px-2 hover:bg-red-50 hover:text-danger hover:border-red-200"
                          onClick={() => setDeleteProductId(product.Id)}
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
            <Package className="w-6 h-6 text-mute" />
          </div>
          <p className="text-sm font-medium text-ink mb-1">
            {search ? 'Sin resultados' : 'Sin productos todavía'}
          </p>
          <p className="text-xs text-mute mb-4">
            {search ? `No hay productos con "${search}"` : 'Crea tu primer producto'}
          </p>
          {!search && (
            <Button variant="sm" leftIcon={<Plus className="w-4 h-4" />} onClick={() => setShowModal(true)}>
              Crear producto
            </Button>
          )}
        </div>
      )}

      {/* Create Modal */}
      <Modal open={showModal} onClose={() => { setShowModal(false); reset(); }} title="Nuevo Producto" size="lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <ProductFormFields reg={register} errs={errors} catOpts={categoryOptions} unitOpts={unitOptions} />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => { setShowModal(false); reset(); }}>Cancelar</Button>
            <Button variant="sm" type="submit" loading={createProduct.isPending}>Crear producto</Button>
          </div>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal open={!!editProduct} onClose={() => setEditProduct(null)} title="Editar Producto" size="lg">
        <form onSubmit={handleEditSubmit(onEditSubmit)} className="flex flex-col gap-5">
          <ProductFormFields reg={registerEdit} errs={editErrors} catOpts={categoryOptions} unitOpts={unitOptions} />
          <div className="flex justify-end gap-2 pt-1">
            <Button variant="ghost-sm" type="button" onClick={() => setEditProduct(null)}>Cancelar</Button>
            <Button variant="sm" type="submit" loading={updateProduct.isPending}>Guardar cambios</Button>
          </div>
        </form>
      </Modal>

      {/* Confirm Delete */}
      <ConfirmDialog
        open={!!deleteProductId}
        onClose={() => setDeleteProductId(null)}
        onConfirm={handleDelete}
        title="Eliminar Producto"
        description="¿Deseas eliminar este producto? Esta acción es irreversible."
        loading={deleteProduct.isPending}
      />
    </div>
  );
}
