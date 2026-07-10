import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  loading?: boolean;
}

export const ConfirmDialog = React.memo(function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Eliminar',
  loading = false,
}: ConfirmDialogProps) {
  return (
    <Modal open={open} onClose={onClose} title={title} size="sm">
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-danger" />
          </div>
          <p className="text-sm text-body leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost-sm" onClick={onClose} disabled={loading}>
            Cancelar
          </Button>
          <Button variant="danger-sm" onClick={onConfirm} loading={loading}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
});
