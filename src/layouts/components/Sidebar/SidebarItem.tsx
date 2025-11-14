import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface SidebarItemProps {
  to: string
  icon: ReactNode
  label: string
  badge?: number
}

export const SidebarItem = ({ to, icon, label, badge }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors',
          isActive
            ? 'bg-primary-100 text-primary-700'
            : 'text-gray-700 hover:bg-gray-100'
        )
      }
    >
      <div className="flex items-center space-x-3">
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
      </div>
      {badge !== undefined && badge > 0 && (
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-danger-500 rounded-full">
          {badge}
        </span>
      )}
    </NavLink>
  )
}