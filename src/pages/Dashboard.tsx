
import { useState } from 'react';
import { UserRole } from '../types/auth';
import Navbar from '../components/Layout/Navbar';
import ClientDashboard from '../components/RoleBasedDashboard/ClientDashboard';
import OrganizerDashboard from '../components/RoleBasedDashboard/OrganizerDashboard';
import TransporterDashboard from '../components/RoleBasedDashboard/TransporterDashboard';
import AdminDashboard from '../components/RoleBasedDashboard/AdminDashboard';

// In a real app, this would come from the authentication context
const mockUser = {
  id: '123',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNumber: '+225 0112345678',
  role: 'client' as UserRole // Default to client for testing
};

const Dashboard = () => {
  // For demo purposes, allowing the role to be changed
  const [userRole, setUserRole] = useState<UserRole>(mockUser.role);
  
  // Render the appropriate dashboard based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'organizer':
        return <OrganizerDashboard />;
      case 'transporter':
        return <TransporterDashboard />;
      case 'client':
      default:
        return <ClientDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        userRole={userRole}
        userName={`${mockUser.firstName} ${mockUser.lastName}`}
      />
      
      {/* Role Selector - This would not be in a production app */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
          <h2 className="text-lg font-medium">Mode démonstration</h2>
          <div className="flex items-center">
            <label htmlFor="roleSelector" className="mr-2 text-sm">
              Changer de rôle:
            </label>
            <select
              id="roleSelector"
              className="border rounded p-1"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as UserRole)}
            >
              <option value="client">Client</option>
              <option value="organizer">Organisateur</option>
              <option value="transporter">Transporteur</option>
              <option value="admin">Administrateur</option>
            </select>
          </div>
        </div>
        
        {/* Dashboard Content */}
        {renderDashboard()}
      </div>
    </div>
  );
};

export default Dashboard;
