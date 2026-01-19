'use client';

import Image from "next/image";
import { useState } from 'react';
import Modal from './Modal';

// Define a type for the structured details
interface ServiceDetails {
  question: string;
  answer: string;
  sections: {
    heading: string;
    points: string[];
  }[];
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  details: ServiceDetails; // Use the new type here
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col text-center">
        {/* Image Display */}
        <div className="relative w-full h-40 rounded-md mb-4 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col flex-grow items-center">
          <h3 className="text-xl font-bold text-dark-blue mb-2">{title}</h3>
          <p className="text-base text-dark-blue opacity-70 mb-4 flex-grow">{description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto px-6 py-2 bg-light-gray text-dark-blue font-semibold rounded-lg shadow-lg hover:bg-opacity-80 transition-colors text-sm"
          >
            Ver detalles
          </button>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title}>
        <div className="space-y-6 text-left">
          <div>
            <h4 className="text-xl font-bold text-dark-blue mb-2">{details.question}</h4>
            <p className="text-base text-dark-blue opacity-80">{details.answer}</p>
          </div>
          {details.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-dark-blue mb-2">{section.heading}</h4>
              <ul className="list-disc list-inside space-y-2 text-base text-dark-blue opacity-80">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ServiceCard;