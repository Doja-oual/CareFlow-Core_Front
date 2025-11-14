import { UserRole } from '@/constants/roles'
import { getMenuItemsByRole } from '@/constants/navigation'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/utils/cn'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  userRole?: UserRole
}

export const Sidebar = ({ isOpen, onClose, userRole = UserRole.DOCTOR }: SidebarProps) => {
  // Récupérer les items de menu selon le rôle
  const menuItems = getMenuItemsByRole(userRole)

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <span className="text-xl font-bold text-primary-600">
              🏥 Careflow
            </span>
            {/* Bouton fermer (mobile uniquement) */}
            <button
              onClick={onClose}
              className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md p-1"
              aria-label="Fermer le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                onClick={() => onClose()} // Fermer sur mobile après clic
              />
            ))}
          </nav>

          {/* User section */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-medium">
                  JD
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Dr. John Doe
                </p>
                <p className="text-xs text-gray-500 truncate">
                  Médecin
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}