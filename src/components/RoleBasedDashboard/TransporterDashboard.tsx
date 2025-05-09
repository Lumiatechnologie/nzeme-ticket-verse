
import { Map, Users, Route, Settings } from "lucide-react";

const TransporterDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Espace Transporteur</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <Route className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Trajets</h3>
            <p className="text-xl font-bold">18</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <Users className="text-green-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Passagers</h3>
            <p className="text-xl font-bold">432</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-purple-100 rounded-lg mr-4">
            <Map className="text-purple-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Destinations</h3>
            <p className="text-xl font-bold">15</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
          <div className="p-3 bg-orange-100 rounded-lg mr-4">
            <Settings className="text-orange-600" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500">Véhicules</h3>
            <p className="text-xl font-bold">8</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Trajets du jour</h2>
              <button className="text-nzeme-green hover:text-nzeme-darkGreen">
                Voir tous
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Départ</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Destination</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Heure</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Passagers</th>
                    <th className="py-2 px-3 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-3 px-3">Abidjan</td>
                    <td className="py-3 px-3">Yamoussoukro</td>
                    <td className="py-3 px-3">08:00</td>
                    <td className="py-3 px-3">45/50</td>
                    <td className="py-3 px-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                        En route
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-3">Abidjan</td>
                    <td className="py-3 px-3">San Pedro</td>
                    <td className="py-3 px-3">10:30</td>
                    <td className="py-3 px-3">32/50</td>
                    <td className="py-3 px-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                        À venir
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-3 px-3">Yamoussoukro</td>
                    <td className="py-3 px-3">Abidjan</td>
                    <td className="py-3 px-3">15:45</td>
                    <td className="py-3 px-3">28/50</td>
                    <td className="py-3 px-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                        À venir
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
                Ajouter un trajet
              </button>
              <button className="w-full py-2 px-4 border border-nzeme-green text-nzeme-green rounded-md hover:bg-gray-50 transition-colors">
                Scanner un QR Code
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Gérer les véhicules
              </button>
            </div>
            
            <h2 className="text-lg font-medium mt-8 mb-4">Statistiques</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Taux d'occupation moyen</span>
                  <span className="text-sm">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-nzeme-green h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Ponctualité</span>
                  <span className="text-sm">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-nzeme-green h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Satisfaction client</span>
                  <span className="text-sm">4.7/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-nzeme-green h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransporterDashboard;
