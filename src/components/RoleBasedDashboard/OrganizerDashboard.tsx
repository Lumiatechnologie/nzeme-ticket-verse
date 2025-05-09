
import { Calendar, BarChart3, Ticket, Settings } from "lucide-react";

const OrganizerDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Espace Organisateur</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Calendar className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Événements</h3>
            <p className="text-xl font-bold">24</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <Ticket className="text-green-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Billets Vendus</h3>
            <p className="text-xl font-bold">854</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg mr-4">
            <BarChart3 className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Revenus</h3>
            <p className="text-xl font-bold">13,580 €</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-orange-100 rounded-lg mr-4">
            <Settings className="text-orange-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">En attente</h3>
            <p className="text-xl font-bold">3</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Événements à venir</h2>
              <button className="text-nzeme-green hover:text-nzeme-darkGreen">
                Voir tous
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Nom</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Lieu</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Billets</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 px-3">Concert Culturel</td>
                    <td className="py-3 px-3">15 Juin 2025</td>
                    <td className="py-3 px-3">Centre Culturel</td>
                    <td className="py-3 px-3">120/200</td>
                    <td className="py-3 px-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                        Actif
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-3">Festival de Jazz</td>
                    <td className="py-3 px-3">22 Juin 2025</td>
                    <td className="py-3 px-3">Parc Central</td>
                    <td className="py-3 px-3">450/1000</td>
                    <td className="py-3 px-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                        Actif
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-3">Exposition d'Art</td>
                    <td className="py-3 px-3">30 Juin 2025</td>
                    <td className="py-3 px-3">Galerie Moderne</td>
                    <td className="py-3 px-3">45/150</td>
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
            <h2 className="text-lg font-medium mb-4">Actions rapides</h2>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-nzeme-green text-white rounded-md hover:bg-nzeme-darkGreen transition-colors">
                Créer un événement
              </button>
              <button className="w-full py-2 px-4 border border-nzeme-green text-nzeme-green rounded-md hover:bg-gray-50 transition-colors">
                Scanner un QR Code
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Voir les statistiques
              </button>
            </div>
            
            <h2 className="text-lg font-medium mt-8 mb-4">Dernières activités</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Ticket size={16} className="text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm">10 billets vendus pour Concert Culturel</p>
                  <p className="text-xs text-gray-500">Il y a 2 heures</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full">
                  <Settings size={16} className="text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm">Mise à jour du prix pour Festival de Jazz</p>
                  <p className="text-xs text-gray-500">Il y a 5 heures</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Calendar size={16} className="text-purple-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm">Nouvel événement créé: Exposition d'Art</p>
                  <p className="text-xs text-gray-500">Hier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
