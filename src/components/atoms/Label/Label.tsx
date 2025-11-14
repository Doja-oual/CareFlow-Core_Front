import { LabelHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  required?: boolean
}

export const Label = ({ children, required, className, ...props }: LabelProps) => {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-gray-700 mb-1',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-danger-500 ml-1">*</span>}
    </label>
  )
}