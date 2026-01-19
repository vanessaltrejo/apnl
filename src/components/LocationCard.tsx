interface LocationCardProps {
  title: string;
  mapSrc?: string; // Make map source optional
}

const LocationCard: React.FC<LocationCardProps> = ({ title, mapSrc }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-dark-blue mb-4 text-center">{title}</h3>
      <div className="aspect-w-16 aspect-h-9 bg-light-gray rounded-lg shadow-md overflow-hidden">
        {mapSrc ? (
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
            <p>Placeholder de Google Maps</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;