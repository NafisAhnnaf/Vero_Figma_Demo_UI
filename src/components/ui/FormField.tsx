import React from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full bg-input-background rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all ${error ? 'border border-destructive ring-destructive/20' : 'border-none'} ${className}`}
          {...props}
        />
        {error && <span className="text-xs text-destructive mt-1">{error}</span>}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
