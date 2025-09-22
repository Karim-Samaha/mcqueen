'use client';

import React from 'react';

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  variant?: 'outline' | 'fill';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  prefixIcon?: React.ReactNode;
  suffexIcon?: React.ReactNode;
  hasError?: boolean;
  errorMessage?: string; // for Formik/Yup error display
  className?: string;
};

// Helper function to merge classes
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Variant styles
const variantClasses: Record<string, string> = {
  outline: 'border-gray-200 hover:border-primary-300 focus-within:border-primary-500 bg-white dark:bg-gray-800',
  fill: 'border-gray-200 bg-[#FAF9FC] hover:border-primary-300 focus-within:border-primary-500',
};

// Size styles
const sizeClasses: Record<string, string> = {
  xs: 'h-[32px]',
  sm: 'h-[40px]',
  md: 'h-[44px]',
  lg: 'h-[48px]',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      hasError,
      errorMessage,
      size = 'lg',
      variant = 'fill',
      className,
      prefixIcon,
      suffexIcon,
      type = 'text',
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col w-full md:w-auto">
        <div
          className={cn(
            'flex items-center rounded-[8px] border px-3 transition-all group',
            variantClasses[variant],
            sizeClasses[size],
            className,
            hasError && 'border-red-500 ring-2 ring-red-200 focus-within:ring-red-300'
          )}
        >
          {prefixIcon && (
            <div className="flex items-center justify-center text-gray-400 mr-2">
              {prefixIcon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className="flex-1 h-full w-full border-none outline-none bg-transparent placeholder:text-gray-400 placeholder:text-sm disabled:cursor-not-allowed"
            {...props}
          />
          {suffexIcon && (
            <div className="flex items-center justify-center text-gray-400 ml-2">
              {suffexIcon}
            </div>
          )}
        </div>
        {hasError && errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
