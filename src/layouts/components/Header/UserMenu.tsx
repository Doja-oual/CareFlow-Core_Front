import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-medium">
          JD
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-medium text-gray-900">Dr. John Doe</p>
          <p className="text-xs text-gray-500">Médecin</p>
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
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              👤 Mon profil
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              ⚙️ Paramètres
            </Link>
            <hr className="my-1" />
            <button
              className="block w-full text-left px-4 py-2 text-sm text-danger-600 hover:bg-gray-100"
              onClick={() => {
                setIsOpen(false)
                // Logique de déconnexion
              }}
            >
              🚪 Déconnexion
            </button>
          </div>
        </>
      )}
    </div>
  )
}