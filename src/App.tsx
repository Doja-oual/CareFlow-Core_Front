import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { MainLayout } from './layouts/MainLayout'
import { UserRole } from './constants/roles'

// Pages temporaires
const LoginPage = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Connexion</h2>
    <p className="text-gray-600">Page de connexion</p>
  </div>
)

const DashboardPage = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Tableau de bord</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Rendez-vous</h3>
        <p className="text-3xl font-bold text-primary-600">24</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Patients</h3>
        <p className="text-3xl font-bold text-secondary-600">156</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Prescriptions</h3>
        <p className="text-3xl font-bold text-success-600">89</p>
      </div>
    </div>
  </div>
)

const AppointmentsPage = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Rendez-vous</h1>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">Liste des rendez-vous</p>
    </div>
  </div>
)

const AppointmentDetailsPage = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Détails du rendez-vous</h1>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">Détails du rendez-vous #123</p>
    </div>
  </div>
)

function App() {
  // Simuler un utilisateur connecté avec un rôle
  const currentUserRole = UserRole.DOCTOR

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes publiques */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />

        {/* Routes protégées */}
        <Route
          path="/dashboard"
          element={
            <MainLayout userRole={currentUserRole}>
              <DashboardPage />
            </MainLayout>
          }
        />
        
        <Route
          path="/appointments"
          element={
            <MainLayout userRole={currentUserRole}>
              <AppointmentsPage />
            </MainLayout>
          }
        />
        
        <Route
          path="/appointments/:id"
          element={
            <MainLayout userRole={currentUserRole}>
              <AppointmentDetailsPage />
            </MainLayout>
          }
        />

        {/* Redirection */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App