
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Phone, User } from 'lucide-react';
import NzemeLogo from '../components/NzemeLogo';
import { RegisterCredentials, UserRole } from '../types/auth';

const Register = () => {
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    role: 'client' // Default role
  });
  
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the actual registration logic
    console.log('Registration with:', credentials);
    // Navigate to login or dashboard would happen here
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 mt-4">
          <NzemeLogo size="md" />
        </div>

        <h1 className="text-center text-2xl font-bold text-nzeme-green mb-6">INSCRIPTION</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="lastName" className="block text-nzeme-green mb-1">Nom :</label>
            <div className="relative">
              <input
                id="lastName"
                type="text"
                className="nzeme-input pl-10"
                placeholder="Entrer votre Nom..."
                value={credentials.lastName}
                onChange={(e) => setCredentials({...credentials, lastName: e.target.value})}
                required
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div>
            <label htmlFor="firstName" className="block text-nzeme-green mb-1">Prénom :</label>
            <div className="relative">
              <input
                id="firstName"
                type="text"
                className="nzeme-input pl-10"
                placeholder="Entrer votre prénom..."
                value={credentials.firstName}
                onChange={(e) => setCredentials({...credentials, firstName: e.target.value})}
                required
              />
              
            </div>
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-nzeme-green mb-1">Téléphone :</label>
            <div className="relative">
              <input
                id="phoneNumber"
                type="tel"
                className="nzeme-input pl-10"
                placeholder="Entrer votre Numéro Mobile..."
                value={credentials.phoneNumber}
                onChange={(e) => setCredentials({...credentials, phoneNumber: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-nzeme-green mb-1">Email :</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="nzeme-input pl-10"
                placeholder="Entrer votre Email..."
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                required
              />
              </div>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-nzeme-green mb-1">Password :</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="nzeme-input pl-10 pr-10"
                placeholder="*************"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
                minLength={8}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <div>
            <label htmlFor="role" className="block text-nzeme-green mb-1">Type de compte :</label>
            <select
              id="role"
              className="nzeme-input"
              value={credentials.role}
              onChange={(e) => setCredentials({...credentials, role: e.target.value as UserRole})}
              required
            >
              <option value="client">Client</option>
              <option value="organizer">Organisateur</option>
              <option value="transporter">Transporteur</option>
            </select>
          </div>
          
          <button type="submit" className="nzeme-button nzeme-green-button w-full mt-4">
            INSCRIPTION
          </button>
          
          <div className="text-center mt-4">
            <Link to="/login" className="text-nzeme-green underline">
              Vous avez un compte ? Connectez-vous
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
