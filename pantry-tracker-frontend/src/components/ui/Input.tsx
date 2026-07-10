import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = React.memo(function Input({
  label,
  error,
  hint,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium text-ink">
          {label}
          {props.required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`geist-input ${error ? 'border-danger ring-1 ring-danger' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
      {hint && !error && <p className="text-xs text-mute">{hint}</p>}
    </div>
  );
});

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  placeholder?: string;
  options: { value: string | number; label: string }[];
}

export const Select = React.memo(function Select({
  label,
  error,
  placeholder,
  options,
  className = '',
  id,
  ...props
}: SelectProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium text-ink">
          {label}
          {props.required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}
      <select
        id={inputId}
        className={`geist-input ${error ? 'border-danger ring-1 ring-danger' : ''} ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
});

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.memo(function Textarea({
  label,
  error,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-xs font-medium text-ink">
          {label}
          {props.required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        className={`geist-input resize-none ${error ? 'border-danger ring-1 ring-danger' : ''} ${className}`}
        rows={3}
        {...props}
      />
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
});
