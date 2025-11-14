// import { useState } from 'react'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header temporaire */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-primary-600">
             Careflow
          </h1>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur Careflow
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Système de gestion des rendez-vous et dossiers médicaux
          </p>
          
          {/* Démonstration du système de design */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Card 1 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-primary-600 text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Rendez-vous
              </h3>
              <p className="text-gray-600">
                Gérez facilement vos rendez-vous médicaux en ligne
              </p>
            </div>

            {/* Card 2 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-secondary-600 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dossiers Médicaux
              </h3>
              <p className="text-gray-600">
                Accédez à vos dossiers médicaux en toute sécurité
              </p>
            </div>

            {/* Card 3 */}
            <div className="card hover:shadow-lg transition-shadow">
              <div className="text-success-600 text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prescriptions
              </h3>
              <p className="text-gray-600">
                Consultez et téléchargez vos prescriptions
              </p>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="mt-12 flex justify-center gap-4">
            <button className="btn btn-primary">
              Se connecter
            </button>
            <button className="btn btn-outline">
              S'inscrire
            </button>
          </div>

          {/* Status de configuration */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              ✅ Configuration du Projet
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start">
                <span className="text-success-500 mr-2">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Tâche 1.1</p>
                  <p className="text-sm text-gray-600">Projet initialisé</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-success-500 mr-2">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Tâche 1.2</p>
                  <p className="text-sm text-gray-600">Outils configurés</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-success-500 mr-2">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Tâche 1.3</p>
                  <p className="text-sm text-gray-600">Styling configuré</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer temporaire */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2025 Careflow - Système de gestion médicale
          </p>
        </div>
      </footer>
    </div>
  )
}




export default App
