import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, fullWidth, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'px-3 py-2 border rounded-md shadow-sm transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error
            ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500'
            : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'