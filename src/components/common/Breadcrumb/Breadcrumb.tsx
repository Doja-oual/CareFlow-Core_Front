import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  const location = useLocation()

  // Générer automatiquement si items n'est pas fourni
  const breadcrumbItems = items || generateBreadcrumbs(location.pathname)

  return (
    <nav aria-label="Breadcrumb" className={cn('flex', className)}>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {/* Home */}
        <li className="inline-flex items-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Accueil
          </Link>
        </li>

        {/* Dynamic items */}
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1

          return (
            <li key={index}>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {isLast || !item.path ? (
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Générer automatiquement les breadcrumbs depuis le path
const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathMap: Record<string, string> = {
    dashboard: 'Tableau de bord',
    appointments: 'Rendez-vous',
    patients: 'Patients',
    prescriptions: 'Prescriptions',
    'lab-orders': 'Analyses',
    documents: 'Documents',
    users: 'Utilisateurs',
    profile: 'Profil',
    settings: 'Paramètres',
    reports: 'Rapports',
    new: 'Nouveau',
    edit: 'Modifier',
  }

  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    
    // Ne pas ajouter le dernier élément s'il est un ID
    if (index === paths.length - 1 && /^\d+$/.test(path)) {
      breadcrumbs.push({
        label: `Détails`,
      })
    } else {
      breadcrumbs.push({
        label: pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1),
        path: currentPath,
      })
    }
  })

  return breadcrumbs
}