
import { Ticket, ShoppingCart, Calendar, User } from "lucide-react";

const ClientDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Bienvenue sur votre espace client</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-nzeme-green text-white">
              <Ticket size={24} />
            </div>
            <h2 className="ml-4 text-lg font-medium">Mes Billets</h2>
          </div>
          <p className="text-gray-600">Accédez à tous vos billets et QR codes</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-nzeme-green text-white">
              <ShoppingCart size={24} />
            </div>
            <h2 className="ml-4 text-lg font-medium">Acheter des billets</h2>
          </div>
          <p className="text-gray-600">Parcourez les événements et réservez vos trajets</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-nzeme-green text-white">
              <Calendar size={24} />
            </div>
            <h2 className="ml-4 text-lg font-medium">Historique</h2>
          </div>
          <p className="text-gray-600">Consultez votre historique de billets utilisés</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-nzeme-green text-white">
              <User size={24} />
            </div>
            <h2 className="ml-4 text-lg font-medium">Mon profil</h2>
          </div>
          <p className="text-gray-600">Gérez vos informations personnelles</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Événements à venir</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Placeholder for events list */}
          <div className="p-4 border-b">
            <p className="font-medium">Concert Live Music</p>
            <p className="text-gray-600 text-sm">15 Juin 2025 - 20:00</p>
          </div>
          <div className="p-4 border-b">
            <p className="font-medium">Festival de la Culture</p>
            <p className="text-gray-600 text-sm">22 Juin 2025 - 10:00</p>
          </div>
          <div className="p-4">
            <p className="font-medium">Match de Football</p>
            <p className="text-gray-600 text-sm">30 Juin 2025 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
