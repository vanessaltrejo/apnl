'use client';

import { useState } from 'react';
import PsychologistCard from './PsychologistCard';

// Placeholder Data - 32 psychologists for 4 pages
const allPsychologists = [
  {
    name: "Akari Balcázar",
    cedula: "14117217",
  },
  {
    name: "Anibal Cerda",
    cedula: "12502399",
  },
  {
    name: "Azul Arenas",
    cedula: "2147483647",
  },
  {
    name: "Beatriz Chávarri",
    cedula: "8878383",
  },
  {
    name: "Catalina Rico",
    cedula: "13534617",
  },
  {
    name: "Dinorah Garcia",
    cedula: "3853843",
  },
  {
    name: "Dynorah Salazar",
    cedula: "14217054",
  },
  {
    name: "Edna Hernandez",
    cedula: "9788228",
  },
  {
    name: "Eduardo Valdes",
    cedula: "M-XXXXX",
  },
  {
    name: "Elia Mancinas",
    cedula: "8993934",
  },
  {
    name: "Jaime Cuevas",
    cedula: "12054485",
  },
  {
    name: "Jessica Briz",
    cedula: "5362079",
  },
  {
    name: "Jesus Castillo",
    cedula: "M-XXXXX",
  },
  {
    name: "María Márquez",
    cedula: "12415546",
  },
  {
    name: "Mario Carvajal",
    cedula: "9867705",
  },
  {
    name: "Perla Fernandez",
    cedula: "6032739",
  },
  {
    name: "Rocío Contreras",
    cedula: "8547175",
  },
  {
    name: "Abigail Rodriguez",
    cedula: "M-XXXXX",
  },
  {
    name: "Alvaro Garcia",
    cedula: "M-XXXXX",
  },
  {
    name: "Anuar Geronimo",
    cedula: "M-XXXXX",
  },
  {
    name: "Cinthia Navarro",
    cedula: "M-XXXXX",
  },
  {
    name: "Daniela Cantú",
    cedula: "M-XXXXX",
  },
  {
    name: "Joy Valdez",
    cedula: "M-XXXXX",
  },
  {
    name: "Karla Valenzuela",
    cedula: "M-XXXXX",
  },
  {
    name: "Lilia Olivo",
    cedula: "M-XXXXX",
  },
  {
    name: "Maria Hernandez",
    cedula: "M-XXXXX",
  },
  {
    name: "Pedro Cantu",
    cedula: "M-XXXXX",
  },
  {
    name: "Ricardo Garcia",
    cedula: "M-XXXXX",
  },
  {
    name: "Vanessa Lopez",
    cedula: "M-XXXXX",
  },
  {
    name: "Victor Flores",
    cedula: "M-XXXXX",
  },
  {
    name: "Violeta Reyna",
    cedula: "M-XXXXX",
  },
];

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const psychologistsPerPage = 10; // 5x2 grid
  const totalPages = Math.ceil(allPsychologists.length / psychologistsPerPage);

  const startIndex = currentPage * psychologistsPerPage;
  const endIndex = startIndex + psychologistsPerPage;
  const currentPsychologists = allPsychologists.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <section className="w-full py-16 bg-[#d9e3f0]">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-blue text-center mb-12">Nuestro Equipo de Psicólogos</h2>
      </div>

      {/* Psychologists Grid with Navigation and Page Indicator */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className="p-2 rounded-full bg-white shadow-md hover:bg-light-gray disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          {/* Psychologists Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 flex-grow">
            {currentPsychologists.map((psychologist, index) => (
              <PsychologistCard key={index} name={psychologist.name} cedula={psychologist.cedula} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full bg-white shadow-md hover:bg-light-gray disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        
        {/* Page Indicator */}
        <div className="text-center mt-8">
          <p className="text-base text-dark-blue opacity-80">
            Página {currentPage + 1} de {totalPages}
          </p>
        </div>
      </div> {/* End of psychologists grid and nav wrapper */}

      {/* Additional Text Block */}
      <div className="max-w-7xl mx-auto px-8 mt-12 text-left text-dark-blue opacity-80 space-y-4 text-base">
        <p>
          Actualmente, la APNL se vincula con dependencias de gobierno, universidades y organizaciones del sector privado para brindar servicios relacionados con la depresión, ansiedad, violencia y salud mental. Nuestro objetivo es integrar recursos y acciones dentro del campo de la psicología profesional.
        </p>
        <p>
          Nuestro equipo está conformado por más de 70 especialistas de la salud mental, brindando atención a niños, adolescentes, adultos y parejas.
        </p>
        <p>
          Todo esto con el firme propósito de mejorar la comunicación familiar y fortalecer la salud emocional en los hogares de México.
        </p>
        <p className="font-semibold">
          ¡Únete a nosotros y juntos transformemos la salud mental en México!
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
