import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { MainLayout } from './layouts/MainLayout'

// Pages temporaires pour démo
const LoginPage = () => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Connexion</h2>
    <p className="text-gray-600">Page de connexion (à développer)</p>
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
      <p className="text-gray-600">Liste des rendez-vous (à développer)</p>
    </div>
  </div>
)

const PatientsPage = () => (
  <div>
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Patients</h1>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600">Liste des patients (à développer)</p>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes publiques avec AuthLayout */}
        <Route path="/login" element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        } />

        {/* Routes protégées avec MainLayout */}
        <Route path="/dashboard" element={
          <MainLayout>
            <DashboardPage />
          </MainLayout>
        } />
        
        <Route path="/appointments" element={
          <MainLayout>
            <AppointmentsPage />
          </MainLayout>
        } />
        
        <Route path="/patients" element={
          <MainLayout>
            <PatientsPage />
          </MainLayout>
        } />

        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App