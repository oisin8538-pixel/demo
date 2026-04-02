import { Gauge, Zap, Weight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BikeCardProps {
  name: string;
  price: string;
  image: string;
  engine: string;
  power: string;
  weight: string;
}

export function BikeCard({ name, price, image, engine, power, weight }: BikeCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full">
          {price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl mb-4">{name}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600">
            <Gauge size={20} className="text-red-600" />
            <span>{engine}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Zap size={20} className="text-red-600" />
            <span>{power}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Weight size={20} className="text-red-600" />
            <span>{weight}</span>
          </div>
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}
