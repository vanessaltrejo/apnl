import Image from "next/image";

interface TherapyOfferingCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const TherapyOfferingCard: React.FC<TherapyOfferingCardProps> = ({ title, price, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col">
      {/* Image Display */}
      <div className="relative w-full h-48 rounded-md mb-6 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="px-2 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-dark-blue mb-2">{title}</h3>
        <p className="text-xl font-semibold text-primary-blue mb-4">{price}</p>
        <p className="text-base text-dark-blue opacity-80 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default TherapyOfferingCard;