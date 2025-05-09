
import { FC } from 'react';

interface NzemeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'green' | 'white';
}

const NzemeLogo: FC<NzemeLogoProps> = ({ size = 'md', color = 'green' }) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const logoPath = '/lovable-uploads/9e8b0965-55e2-4c0a-8e0b-4ec3a6e04abf.png';
  
  return (
    <div className="flex flex-col items-center justify-center">
      <img 
        src={logoPath} 
        alt="N'ZÊME Logo" 
        className={`nzeme-logo ${sizes[size]} ${color === 'white' ? 'brightness-0 invert' : ''}`}
      />
      <div className={`font-bold text-center mt-2 ${color === 'white' ? 'text-white' : 'text-nzeme-green'}`}>
        <p className={`${size === 'sm' ? 'text-[8px]' : size === 'md' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-base'} tracking-widest`}>
          LA BILLETTERIE NUMÉRIQUE INTELLIGENTE
        </p>
      </div>
    </div>
  );
};

export default NzemeLogo;
