
import { Users, ArrowUp, BarChart3, Settings } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Administration N'ZÊME</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Users className="text-blue-600" />
          </div>
          <div>
            <div className="flex items-center">
              <p className="text-xl font-bold">1,256</p>
              <span className="ml-2 text-green-500 flex items-center text-xs">
                <ArrowUp size={12} />
                12%
              </span>
            </div>
            <h3 className="text-sm text-gray-500">Utilisateurs</h3>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <BarChart3 className="text-green-600" />
          </div>
          <div>
            <div className="flex items-center">
              <p className="text-xl font-bold">32,580€</p>
              <span className="ml-2 text-green-500 flex items-center text-xs">
                <ArrowUp size={12} />
                8%
              </span>
            </div>
            <h3 className="text-sm text-gray-500">Revenus</h3>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg mr-4">
            <Users className="text-purple-600" />
          </div>
          <div>
            <p className="text-xl font-bold">28</p>
            <h3 className="text-sm text-gray-500">Organisateurs</h3>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-orange-100 rounded-lg mr-4">
            <Settings className="text-orange-600" />
          </div>
          <div>
            <p className="text-xl font-bold">12</p>
            <h3 className="text-sm text-gray-500">Transporteurs</h3>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Derniers utilisateurs inscrits</h2>
              <button className="text-nzeme-green hover:text-nzeme-darkGreen">
                Voir tous
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Nom</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Rôle</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 px-3">Jean Kouassi</td>
                    <td className="py-3 px-3">jean.k@example.com</td>
                    <td className="py-3 px-3">Client</td>
                    <td className="py-3 px-3">10 Mai 2025</td>
                    <td className="py-3 px-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                        Actif
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-3">Marie Touré</td>
                    <td className="py-3 px-3">marie.t@example.com</td>
                    <td className="py-3 px-3">Organisateur</td>
                    <td className="py-3 px-3">9 Mai 2025</td>
                    <td className="py-3 px-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                        Actif
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-3">Paul Diallo</td>
                    <td className="py-3 px-3">paul.d@example.com</td>
                    <td className="py-3 px-3">Transporteur</td>
                    <td className="py-3 px-3">8 Mai 2025</td>
                    <td className="py-3 px-3">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-xs">
                        En attente
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-medium mb-4">Administration</h2>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-nzeme-green text-white rounded-md hover:bg-nzeme-darkGreen transition-colors">
                Gestion des utilisateurs
              </button>
              <button className="w-full py-2 px-4 border border-nzeme-green text-nzeme-green rounded-md hover:bg-gray-50 transition-colors">
                Paramètres système
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Rapports financiers
              </button>
            </div>
            
            <h2 className="text-lg font-medium mt-8 mb-4">Alertes système</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-3">
                <div className="flex items-center">
                  <div className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-red-700">
                    <span className="font-medium">Erreur de paiement</span> - Service CinetPay temporairement indisponible
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
                <div className="flex">
                  <div className="text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-sm text-yellow-700">
                    <span className="font-medium">Avertissement</span> - 5 nouveaux transporteurs en attente d'approbation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
