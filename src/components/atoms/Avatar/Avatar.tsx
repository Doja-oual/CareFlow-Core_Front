import { ImgHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  name?: string
}

export const Avatar = ({ size = 'md', name, src, alt, className, ...props }: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  if (!src && name) {
    return (
      <div
        className={cn(
          'inline-flex items-center justify-center rounded-full bg-primary-500 text-white font-medium',
          sizes[size],
          className
        )}
      >
        {getInitials(name)}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || name}
      className={cn(
        'inline-block rounded-full object-cover',
        sizes[size],
        className
      )}
      {...props}
    />
  )
  
}