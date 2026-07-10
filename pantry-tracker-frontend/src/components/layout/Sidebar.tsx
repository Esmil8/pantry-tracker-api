import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBasket,
  Package,
  Tag,
  Ruler,
  LogOut,
  ChefHat,
  Sun,
  Moon,
} from 'lucide-react';
import { useAuthStore } from '@/store/auth.store';
import { useThemeStore } from '@/store/theme.store';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/pantry', label: 'Mis Despensas', icon: ShoppingBasket },
  { to: '/products', label: 'Productos', icon: Package },
  { to: '/categories', label: 'Categorías', icon: Tag },
  { to: '/units', label: 'Unidades', icon: Ruler },
];

export const Sidebar = React.memo(function Sidebar() {
  const { user, clearAuth } = useAuthStore();
  const { isDark, toggle } = useThemeStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate('/login');
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-elevated border-r border-hairline flex flex-col z-30">
      {/* Logo */}
      <div className="px-4 py-4 border-b border-hairline">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-sm bg-ink flex items-center justify-center flex-shrink-0">
            <ChefHat className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink tracking-tight leading-none">Pantry</p>
            <p className="text-xs text-mute leading-none mt-0.5">Tracker</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        <p className="eyebrow px-3 mb-3">Menú</p>
        <ul className="flex flex-col gap-0.5" role="list">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User + Logout */}
      <div className="border-t border-hairline p-3">
        {user && (
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-semibold">
                {user.name[0]?.toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-ink truncate">
                {user.name} {user.lastName}
              </p>
              <p className="text-xs text-mute truncate">{user.email}</p>
            </div>
          </div>
        )}
        <button
          onClick={toggle}
          className="w-full sidebar-link text-mute hover:text-ink mb-1.5"
          id="sidebar-theme-toggle-btn"
        >
          {isDark ? (
            <>
              <Sun className="w-4 h-4 flex-shrink-0 text-amber-500" />
              <span>Modo claro</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 flex-shrink-0 text-indigo-500" />
              <span>Modo oscuro</span>
            </>
          )}
        </button>
        <button
          onClick={handleLogout}
          className="w-full sidebar-link text-mute hover:text-danger hover:bg-red-50"
          id="sidebar-logout-btn"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
});
