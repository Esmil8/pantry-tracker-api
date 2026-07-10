import React from 'react';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export const Spinner = React.memo(function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  return (
    <Loader2 className={`${sizeMap[size]} animate-spin text-mute ${className}`} />
  );
});

export const PageLoader = React.memo(function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" />
        <p className="text-sm text-mute">Cargando...</p>
      </div>
    </div>
  );
});
