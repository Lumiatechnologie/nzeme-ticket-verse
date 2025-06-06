
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NzemeLogo from '../components/NzemeLogo';
import LoadingSpinner from '../components/LoadingSpinner';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to splash screen
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-nzeme-green p-4">
      <div className="animate-fade-in">
        <NzemeLogo size="xl" color="white" />
        <div className="mt-10 flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Index;
