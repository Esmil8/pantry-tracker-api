import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const AppLayout = React.memo(function AppLayout() {
  return (
    <div className="flex h-screen bg-canvas overflow-hidden">
      <Sidebar />
      <main className="flex-1 ml-56 overflow-y-auto">
        <div className="min-h-full p-8 page-enter">
          <Outlet />
        </div>
      </main>
    </div>
  );
});
