import React from 'react';

type WaveProps = {
  position: 'top' | 'bottom';
  color: string;
  variant?: '1' | '2' | '3';
  className?: string;
};

const Wave: React.FC<WaveProps> = ({ position, color, variant = '1', className = '' }) => {
  const isTop = position === 'top';
  
  // Different SVG paths for variety
  const paths = {
    '1': "M0,256L48,240C96,224,192,192,288,149.3C384,107,480,53,576,42.7C672,32,768,64,864,96C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z",
    '2': "M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,218.7C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,320L0,320Z",
    '3': "M0,160L48,186.7C96,213,192,267,288,266.7C384,267,480,213,576,181.3C672,149,768,139,864,154.7C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L0,320Z"
  };

  const selectedPath = paths[variant];

  // Base styles for positioning
  const style: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    direction: 'ltr',
    ...(isTop ? { top: -1, transform: 'rotate(180deg)' } : { bottom: -1 }),
    zIndex: 1, // Ensure it's above background but below content if needed, though usually background patterns are z-0. 
               // Section content is z-10. So z-1 here is fine, it will overlap the section background.
  };

  return (
    <div style={style} className={`pointer-events-none w-full leading-[0] ${className}`}>
        <svg
            className={`relative block h-[60px] sm:h-[80px] md:h-[100px] w-[calc(100%+1.3px)] ${color}`}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                fill="currentColor"
                d={selectedPath}
            ></path>
        </svg>
    </div>
  );
};

export default Wave;
