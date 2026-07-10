import React from 'react';
import { type PantryItemStatus } from '@/types/pantry.types';
import { getStatusConfig } from '@/utils/helpers';

interface BadgeProps {
  status: PantryItemStatus;
}

export const StatusBadge = React.memo(function StatusBadge({ status }: BadgeProps) {
  const config = getStatusConfig(status);
  return (
    <span className={`badge ${config.className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} flex-shrink-0`} />
      {config.label}
    </span>
  );
});

interface GenericBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'mute';
}

const variantMap = {
  default: 'bg-link-soft text-link border border-blue-200',
  success: 'bg-blue-50 text-link border border-blue-200',
  warning: 'bg-yellow-50 text-warning-deep border border-yellow-200',
  danger: 'bg-red-50 text-danger border border-red-200',
  mute: 'bg-hairline-soft text-mute border border-hairline',
};

export const Badge = React.memo(function Badge({
  children,
  variant = 'default',
}: GenericBadgeProps) {
  return <span className={`badge ${variantMap[variant]}`}>{children}</span>;
});
