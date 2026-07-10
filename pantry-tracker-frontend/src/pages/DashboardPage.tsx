import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Package, Tag, Ruler, AlertTriangle, Clock, Sparkles, ChevronRight, Sun, Moon, Sunrise } from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { usePantries, usePantryItems } from '@/hooks/usePantry';
import { useProducts } from '@/hooks/useProducts';
import { useCategories } from '@/hooks/useCategories';
import { useUnits } from '@/hooks/useUnits';
import { PageLoader } from '@/components/ui/Spinner';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  description?: string;
  accentClass?: string;
  to: string;
}

const StatCard = React.memo(function StatCard({ label, value, icon, description, accentClass = 'bg-hairline-soft', to }: StatCardProps) {
  return (
    <Link to={to} className="geist-card p-5 flex items-start gap-4 hover:shadow-float transition-all duration-200 group block">
      <div className={`w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 ${accentClass}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-2xl font-semibold text-ink tracking-tight">{value}</p>
        <p className="text-xs font-medium text-ink mt-0.5">{label}</p>
        {description && <p className="text-xs text-mute mt-0.5">{description}</p>}
      </div>
      <ChevronRight className="w-4 h-4 text-hairline group-hover:text-mute transition-colors mt-1" />
    </Link>
  );
});

// Inner component to fetch pantry items for a specific pantry
function PantryStatsFetcher({ pantryId, onStats }: { pantryId: number; onStats: (pantryId: number, expired: number, expiring: number) => void }) {
  const { data: items } = usePantryItems(pantryId);

  const expired = useMemo(() => items?.filter(i => i.status === 'EXPIRED').length ?? 0, [items]);
  const expiring = useMemo(() => items?.filter(i =>
    i.status === 'EXPIRING_TODAY' || i.status.startsWith('CRITICAL') || i.status.startsWith('EXPIRING_IN')
  ).length ?? 0, [items]);

  React.useEffect(() => {
    onStats(pantryId, expired, expiring);
  }, [pantryId, expired, expiring, onStats]);

  return null;
}

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const { data: pantries, isLoading: pantriesLoading } = usePantries(user?.id ?? 0);
  const { data: products } = useProducts();
  const { data: categories } = useCategories();
  const { data: units } = useUnits();

  // Use a Map keyed by pantryId to avoid double-counting on re-renders
  const [statsMap, setStatsMap] = React.useState<Map<number, { expired: number; expiring: number }>>(new Map());

  const handleStats = React.useCallback((pantryId: number, expired: number, expiring: number) => {
    setStatsMap(prev => {
      const next = new Map(prev);
      next.set(pantryId, { expired, expiring });
      return next;
    });
  }, []);

  const expiredCount = useMemo(() => Array.from(statsMap.values()).reduce((s, v) => s + v.expired, 0), [statsMap]);
  const expiringCount = useMemo(() => Array.from(statsMap.values()).reduce((s, v) => s + v.expiring, 0), [statsMap]);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';
  const GreetingIcon = hour < 12 ? Sunrise : hour < 18 ? Sun : Moon;

  if (pantriesLoading) return <PageLoader />;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="eyebrow mb-2">Dashboard</p>
        <h1 className="text-3xl font-semibold text-ink tracking-tight flex items-center gap-2">
          {greeting}, {user?.name}
          <GreetingIcon className="w-7 h-7 text-mute animate-pulse" />
        </h1>
        <p className="text-sm text-mute mt-1">
          Aquí tienes un resumen de tu despensa
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4">
        <StatCard
          label="Despensas"
          value={pantries?.length ?? 0}
          icon={<ShoppingBasket className="w-5 h-5 text-ink" />}
          description="Total registradas"
          to="/pantry"
        />
        <StatCard
          label="Productos"
          value={products?.length ?? 0}
          icon={<Package className="w-5 h-5 text-link" />}
          accentClass="bg-blue-50"
          description="En catálogo"
          to="/products"
        />
        <StatCard
          label="Expirados"
          value={expiredCount}
          icon={<AlertTriangle className="w-5 h-5 text-danger" />}
          accentClass="bg-red-50"
          description="Requieren atención"
          to="/pantry?status=EXPIRED"
        />
        <StatCard
          label="Por vencer"
          value={expiringCount}
          icon={<Clock className="w-5 h-5 text-warning-deep" />}
          accentClass="bg-yellow-50"
          description="Próximos 7 días"
          to="/pantry?status=EXPIRING_IN_7_DAYS"
        />
      </div>

      {/* Hidden stats fetchers for each pantry */}
      {pantries?.map(p => (
        <PantryStatsFetcher key={p.Id} pantryId={p.Id} onStats={handleStats} />
      ))}

      {/* Quick Access */}
      <div className="geist-card overflow-hidden mb-8">
        <div className="px-5 py-4 border-b border-hairline flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink">Acceso Rápido</h2>
          <span className="eyebrow">Módulos</span>
        </div>
        <div className="grid grid-cols-2 divide-x divide-y divide-hairline lg:grid-cols-4">
          {[
            { to: '/pantry', label: 'Gestionar Despensa', icon: ShoppingBasket, gradient: 'gradient-develop' },
            { to: '/products', label: 'Gestionar Productos', icon: Package, gradient: 'gradient-preview' },
            { to: '/categories', label: 'Categorías', icon: Tag, gradient: 'gradient-ship' },
            { to: '/units', label: 'Unidades', icon: Ruler, gradient: 'gradient-develop' },
          ].map(({ to, label, icon: Icon, gradient }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-start gap-3 p-5 hover:bg-hairline-soft transition-colors group"
            >
              <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${gradient}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-ink group-hover:text-link transition-colors">{label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pantries list */}
      {pantries && pantries.length > 0 && (
        <div className="geist-card overflow-hidden">
          <div className="px-5 py-4 border-b border-hairline flex items-center justify-between">
            <h2 className="text-sm font-semibold text-ink">Mis Despensas</h2>
            <Link to="/pantry" className="text-xs text-link hover:text-link-deep transition-colors">
              Ver todas →
            </Link>
          </div>
          <ul className="divide-y divide-hairline">
            {pantries.slice(0, 5).map((pantry) => (
              <li key={pantry.Id}>
                <Link
                  to={`/pantry/${pantry.Id}`}
                  className="flex items-center gap-4 px-5 py-3 hover:bg-hairline-soft transition-colors group"
                >
                  <div className="w-8 h-8 rounded-sm bg-hairline-soft flex items-center justify-center flex-shrink-0">
                    <ShoppingBasket className="w-4 h-4 text-mute" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{pantry.Name}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-hairline group-hover:text-mute transition-colors" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {pantries?.length === 0 && (
        <div className="geist-card p-12 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-md bg-hairline-soft flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-mute" />
          </div>
          <h2 className="text-sm font-semibold text-ink mb-1">Empieza por crear una despensa</h2>
          <p className="text-xs text-mute mb-4">Organiza tus productos y nunca te olvides de lo que tienes</p>
          <Link to="/pantry">
            <button className="btn-sm">Crear mi primera despensa</button>
          </Link>
        </div>
      )}
    </div>
  );
}
