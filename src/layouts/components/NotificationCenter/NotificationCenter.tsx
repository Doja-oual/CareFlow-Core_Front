import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { Badge } from '@/components/atoms/Badge'

interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'danger'
  title: string
  message: string
  time: string
  read: boolean
  link?: string
}

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'info',
      title: 'Nouveau rendez-vous',
      message: 'Patient Jean Dupont - 14:00',
      time: 'Il y a 5 min',
      read: false,
      link: '/appointments/1',
    },
    {
      id: '2',
      type: 'warning',
      title: 'Prescription expirée',
      message: 'La prescription #1234 expire aujourd\'hui',
      time: 'Il y a 1h',
      read: false,
      link: '/prescriptions/1234',
    },
    {
      id: '3',
      type: 'success',
      title: 'Résultat disponible',
      message: 'Analyse de laboratoire disponible',
      time: 'Il y a 2h',
      read: true,
      link: '/lab-orders/5678',
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const getIcon = (type: Notification['type']) => {
    const icons = {
      info: '📋',
      success: '✅',
      warning: '⚠️',
      danger: '🚨',
    }
    return icons[type]
  }

  return (
    <div className="relative">
      {/* Bell button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
        aria-label="Notifications"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-5 h-5 bg-danger-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-20 border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Notifications
              </h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                >
                  Tout marquer comme lu
                </button>
              )}
            </div>

            {/* Notifications list */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="px-4 py-8 text-center text-gray-500">
                  Aucune notification
                </div>
              ) : (
                notifications.map((notification) => (
                  <Link
                    key={notification.id}
                    to={notification.link || '#'}
                    onClick={() => {
                      markAsRead(notification.id)
                      setIsOpen(false)
                    }}
                    className={cn(
                      'block px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors',
                      !notification.read && 'bg-blue-50'
                    )}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl flex-shrink-0">
                        {getIcon(notification.type)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-200">
              <Link
                to="/notifications"
                className="block text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Voir toutes les notifications
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}