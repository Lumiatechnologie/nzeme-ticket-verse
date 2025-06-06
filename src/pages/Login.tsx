
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import NzemeLogo from '../components/NzemeLogo';
import { LoginCredentials } from '../types/auth';

const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the actual authentication logic
    console.log('Login attempt with:', credentials);
    // Navigate to dashboard based on user role would happen here
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Formulaire côté gauche */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 mt-8 flex justify-center">
            <NzemeLogo size="lg" />
          </div>

          <h1 className="text-center text-2xl font-bold text-nzeme-green mb-8">CONNEXION</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-nzeme-green mb-2">Email :</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className="nzeme-input"
                  placeholder="Entrer votre Email..."
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-nzeme-green mb-2">Password :</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="nzeme-input pr-10"
                  placeholder="Entrer votre password..."
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
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
            
            <button type="submit" className="nzeme-button nzeme-gold-button w-full">
              SE CONNECTER
            </button>
            
            <div className="text-center space-y-2">
              <Link to="/forgot-password" className="block text-nzeme-green underline text-sm">
                Mot de passe oublié ?
              </Link>
              <div className="text-sm">
                Vous n'avez pas de compte ?{' '}
                <Link to="/register" className="text-nzeme-green underline">
                  Créez-en un ici
                </Link>
              </div>
            </div>
            
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-gray-500 text-sm">ou</span>
              </div>
            </div>
            
            <button 
              type="button" 
              className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Connexion avec Google
            </button>
          </form>
        </div>
      </div>
      
      {/* Image côté droit */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ background: #027333 }}>
        <div className="h-full w-full bg-nzeme-green bg-opacity-70 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <div className="mb-8 mt-8 flex justify-center">
             <NzemeLogo size="lg" />
           </div>
            <h2 className="text-3xl font-bold mb-4">Bienvenue sur N'ZÊME</h2>
            <p className="text-xl">La billetterie numérique intelligente pour tous vos événements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
