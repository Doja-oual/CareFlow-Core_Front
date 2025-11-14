import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface FormErrorProps {
  children: ReactNode
  className?: string
}

export const FormError = ({ children, className }: FormErrorProps) => {
  if (!children) return null

  return (
    <p className={cn('text-sm text-danger-600 mt-1', className)}>
      {children}
    </p>
  )
}