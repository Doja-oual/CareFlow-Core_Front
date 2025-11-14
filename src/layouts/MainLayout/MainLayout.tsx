import { ReactNode, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { UserRole } from '@/constants/roles'

interface MainLayoutProps {
  children: ReactNode
  userRole?: UserRole
  showBreadcrumb?: boolean
}

export const MainLayout = ({
  children,
  userRole = UserRole.DOCTOR,
  showBreadcrumb = true,
}: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          userRole={userRole}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header onMenuClick={() => setSidebarOpen(true)} />

          {/* Page content */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Breadcrumb */}
              {showBreadcrumb && (
                <div className="mb-6">
                  <Breadcrumb />
                </div>
              )}

              {/* Children */}
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}