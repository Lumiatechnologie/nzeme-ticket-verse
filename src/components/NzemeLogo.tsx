
import { FC } from 'react';

interface NzemeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'green' | 'white';
}

const NzemeLogo: FC<NzemeLogoProps> = ({ size = 'md', color = 'green' }) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-18 h-18',
    lg: 'w-28 h-28',
    xl: 'w-40 h-40'
  };

  const logoPath = '/lovable-uploads/b9b1d8c3-4790-4597-a1c4-79515cdbb1d5.png';
  
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
