import { useState, useEffect } from 'react';

const claims = [
  "Ästhetischer Zahntechnik",
  "Moderner Dentaltechnik",
  "Präzision auf höchstem Niveau",
  "Zahntechnik mit Herz"
];
// Duplicate first item for seamless loop
const extendedClaims = [...claims, claims[0]];

const HeroSlotText = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    // Reset loop when reaching the clone
    if (activeIdx === claims.length) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setActiveIdx(0);
      }, 700); // Match transition duration
      return () => clearTimeout(timeout);
    }

    // Re-enable transition after reset
    if (activeIdx === 0 && !transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timeout);
    }

    // Normal cycle
    const interval = setInterval(() => {
        setActiveIdx((current) => current + 1);
    }, 3000); // 3s total cycle

    return () => clearInterval(interval);
  }, [activeIdx, transitionEnabled]);

  const lineHeight = 1.3;

  return (
    <div className="flex flex-col items-start justify-center font-bold font-serif drop-shadow-sm">
      {/* Top Static Line */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 leading-tight">
        Willkommen bei
      </div>

      {/* Animated Bottom Line Container */}
      <div 
        className="relative inline-block overflow-hidden align-bottom w-max"
        style={{ height: `${lineHeight}em` }} 
      >
         {/* Strip */}
         <div 
            className={`flex flex-col whitespace-nowrap ${transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateY(calc(-${activeIdx} * ${lineHeight}em))` }}
         >
            {extendedClaims.map((text, i) => (
                <div 
                    key={i} 
                    className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary-400 block"
                    style={{ height: `${lineHeight}em`, lineHeight: lineHeight }}
                >
                    {text}
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default HeroSlotText;
