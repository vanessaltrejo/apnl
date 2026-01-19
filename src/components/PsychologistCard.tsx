interface PsychologistCardProps {
  name: string;
  cedula: string;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({ name, cedula }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg text-center p-6 border border-gray-200 flex flex-col">
      {/* Photo Placeholder */}
      <div className="w-32 h-28 bg-light-gray rounded-lg mx-auto mb-4 flex items-center justify-center text-gray-500 text-sm">
        Foto
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-dark-blue">{name}</h3>
        <p className="text-gray-500 text-base mb-4">Cédula: {cedula}</p>
      </div>
      <a 
        href="#" 
        className="mt-auto px-4 py-2 bg-light-gray text-dark-blue text-base font-semibold rounded-md hover:bg-opacity-80 transition-colors"
      >
        Perfil completo
      </a>
    </div>
  );
};

export default PsychologistCard;