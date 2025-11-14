import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { Avatar } from '@/components/atoms/Avatar'

interface User {
  name: string
  email: string
  role: string
  avatar?: string
}

interface UserMenuProps {
  user?: User
}

export const UserMenu = ({
  user = {
    name: 'Dr. John Doe',
    email: 'john.doe@careflow.com',
    role: 'Médecin',
  },
}: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Implémenter la logique de déconnexion
    console.log('Déconnexion...')
    setIsOpen(false)
    navigate('/login')
  }

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
        aria-label="Menu utilisateur"
        aria-expanded={isOpen}
      >
        <Avatar
          size="md"
          name={user.name}
          src={user.avatar}
          alt={user.name}
        />
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
        <svg
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform',
            isOpen && 'transform rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-20 border border-gray-200">
            {/* User info */}
            <div className="px-4 py-3 border-b border-gray-200">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            {/* Menu items */}
            <div className="py-1">
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">👤</span>
                Mon profil
              </Link>
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">⚙️</span>
                Paramètres
              </Link>
              <Link
                to="/help"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3">❓</span>
                Aide
              </Link>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-200 py-1">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-danger-600 hover:bg-gray-100"
              >
                <span className="mr-3">🚪</span>
                Déconnexion
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}