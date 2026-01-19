'use client'; // This directive is necessary for using React hooks like useState and useEffect

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-[75vh] flex items-center justify-center text-center text-dark-blue overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Psicólogos en Nuevo León"
          layout="fill"
          objectFit="cover"
          quality={85}
          className={`transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0} // Prioritize loading the first image
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 px-4 py-8 bg-white/80 rounded-lg shadow-lg max-w-[52rem] mx-auto">
        <p className="text-lg md:text-xl mb-2 text-dark-blue">
          Asociación de Psicólogos y Psicólogas de Nuevo León A.C.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 text-dark-blue">
          Tu bienestar emocional guiado por los mejores profesionales de Nuevo León
        </h1>

        <p className="text-base md:text-lg mt-3 text-dark-blue">
          Especialistas con más de 25 años de experiencia, acompañando a miles de personas.
        </p>
        <div className="mt-8">
          <a
            href="/agendar-cita"
            className="px-8 py-3 bg-primary-blue text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 text-base"
          >
            Agendar una Cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
