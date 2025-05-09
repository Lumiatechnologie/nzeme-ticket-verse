
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NzemeLogo from '../components/NzemeLogo';
import LoadingSpinner from '../components/LoadingSpinner';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time then navigate to login
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-nzeme-green p-4">
      <div className="animate-fade-in">
        <NzemeLogo size="xl" color="white" />
        <div className="mt-10 flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
        <p className="text-white text-center mt-4">CHARGEMENT...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
