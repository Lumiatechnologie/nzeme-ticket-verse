
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User, Ticket, Bell, LogOut } from 'lucide-react';
import NzemeLogo from '../NzemeLogo';
import { UserRole } from '../../types/auth';

interface NavbarProps {
  userRole?: UserRole;
  userName?: string;
}

const Navbar = ({ userRole, userName }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NzemeLogo size="sm" />
            </div>
          </div>
          
          {userRole && (
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <Link 
                to="/tickets" 
                className="text-gray-600 hover:text-nzeme-green px-3 py-2 rounded-md text-sm font-medium"
              >
                Billets
              </Link>
              
              {(userRole === 'organizer' || userRole === 'transporter') && (
                <Link 
                  to="/dashboard" 
                  className="text-gray-600 hover:text-nzeme-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tableau de bord
                </Link>
              )}
              
              {userRole === 'organizer' && (
                <Link 
                  to="/events" 
                  className="text-gray-600 hover:text-nzeme-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Événements
                </Link>
              )}
              
              {userRole === 'transporter' && (
                <Link 
                  to="/routes" 
                  className="text-gray-600 hover:text-nzeme-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Trajets
                </Link>
              )}
              
              {userRole === 'admin' && (
                <Link 
                  to="/admin" 
                  className="text-gray-600 hover:text-nzeme-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Administration
                </Link>
              )}
              
              {userRole === 'client' && (
                <Link 
                  to="/browse" 
                  className="text-gray-600 hover:text-nzeme-green px-3 py-2 rounded-md text-sm font-medium"
                >
                  Parcourir
                </Link>
              )}
            </div>
          )}
          
          <div className="flex items-center">
            {userRole && (
              <>
                <button className="p-2 rounded-full text-gray-600 hover:text-nzeme-green">
                  <Bell size={20} />
                </button>
                
                <div className="ml-3 relative">
                  <div>
                    <button 
                      type="button" 
                      className="flex items-center max-w-xs rounded-full text-sm focus:outline-none"
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                      <div className="h-8 w-8 rounded-full bg-nzeme-green flex items-center justify-center text-white">
                        <User size={18} />
                      </div>
                    </button>
                  </div>
                  
                  {isProfileOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b">
                          <p className="font-medium">{userName || 'Utilisateur'}</p>
                          <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                        </div>
                        <Link 
                          to="/profile" 
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <User size={16} className="mr-2" />
                          Profil
                        </Link>
                        <Link 
                          to="/tickets" 
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <Ticket size={16} className="mr-2" />
                          Mes billets
                        </Link>
                        <Link 
                          to="/logout" 
                          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <LogOut size={16} className="mr-2" />
                          Déconnexion
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-nzeme-green hover:bg-gray-100 focus:outline-none"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && userRole && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/tickets"
              className="block px-3 py-2 rounded-md text-base font-medium text-nzeme-green bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Billets
            </Link>
            
            {(userRole === 'organizer' || userRole === 'transporter') && (
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nzeme-green hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Tableau de bord
              </Link>
            )}
            
            {userRole === 'organizer' && (
              <Link
                to="/events"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nzeme-green hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Événements
              </Link>
            )}
            
            {userRole === 'transporter' && (
              <Link
                to="/routes"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nzeme-green hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Trajets
              </Link>
            )}
            
            {userRole === 'admin' && (
              <Link
                to="/admin"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nzeme-green hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Administration
              </Link>
            )}
            
            {userRole === 'client' && (
              <Link
                to="/browse"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nzeme-green hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Parcourir
              </Link>
            )}
            
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nzeme-green hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Profil
            </Link>
            
            <Link
              to="/logout"
              className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
              onClick={() => setIsOpen(false)}
            >
              Déconnexion
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
