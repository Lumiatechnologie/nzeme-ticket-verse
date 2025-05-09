
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import NzemeLogo from '../components/NzemeLogo';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the reset password logic
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 sm:p-6">
        <div className="w-full max-w-md text-center">
          <NzemeLogo size="md" />
          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-medium text-nzeme-green mb-2">Email envoyé</h2>
            <p className="text-gray-600 mb-4">
              Si un compte existe avec l'adresse email {email}, vous recevrez un lien pour réinitialiser votre mot de passe.
            </p>
            <Link to="/login" className="nzeme-button nzeme-green-button inline-block">
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 mt-8">
          <NzemeLogo size="md" />
        </div>

        <h1 className="text-center text-2xl font-bold text-nzeme-green mb-4">Mot de passe oublié</h1>
        <p className="text-center text-gray-600 mb-8">
          Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-nzeme-green mb-2">Email :</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="nzeme-input pl-10"
                placeholder="Entrer votre Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <button type="submit" className="nzeme-button nzeme-green-button w-full">
            Envoyer le lien de réinitialisation
          </button>
          
          <div className="text-center">
            <Link to="/login" className="text-nzeme-green underline">
              Retour à la connexion
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
