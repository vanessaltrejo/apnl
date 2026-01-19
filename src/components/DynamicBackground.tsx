'use client';

import { useState, useEffect } from 'react';

const backgrounds = [
  'bg-gradient-to-r from-blue-500 to-indigo-600',
  'bg-gradient-to-r from-slate-600 to-gray-700',
  'bg-gradient-to-r from-sky-400 to-blue-500',
];

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  },

  []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Gradients */}
      {backgrounds.map((bgClass, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${bgClass} ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Dark Overlay (optional, adjust opacity as needed) */}
      <div className="absolute inset-0 w-full h-full bg-black/30" />

      {/* Content rendered on top of the dynamic background */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default DynamicBackground;
