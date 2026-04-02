import { BikeCard } from './BikeCard';

const bikes = [
  {
    name: 'Speed Racer 1000',
    price: '$14,999',
    image: 'https://images.unsplash.com/photo-1552293164-607ec8360528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    engine: '1000cc Engine',
    power: '200 HP',
    weight: '195 kg'
  },
  {
    name: 'Street Thunder',
    price: '$11,499',
    image: 'https://images.unsplash.com/photo-1758550470802-2ec380feb069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    engine: '750cc Engine',
    power: '150 HP',
    weight: '185 kg'
  },
  {
    name: 'Adventure Pro',
    price: '$13,299',
    image: 'https://images.unsplash.com/photo-1774177897763-87c9b3ab3a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    engine: '900cc Engine',
    power: '165 HP',
    weight: '210 kg'
  },
  {
    name: 'Urban Rider',
    price: '$9,999',
    image: 'https://images.unsplash.com/photo-1758550470748-eec232fa356f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    engine: '650cc Engine',
    power: '120 HP',
    weight: '175 kg'
  },
  {
    name: 'Track Beast',
    price: '$17,999',
    image: 'https://images.unsplash.com/photo-1764605513250-aa9214010eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    engine: '1200cc Engine',
    power: '240 HP',
    weight: '200 kg'
  },
  {
    name: 'Cruiser Elite',
    price: '$12,799',
    image: 'https://images.unsplash.com/photo-1774838228161-b08a31ee8d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    engine: '850cc Engine',
    power: '145 HP',
    weight: '205 kg'
  }
];

export function BikesSection() {
  return (
    <section id="bikes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium selection of high-performance motorcycles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard key={bike.name} {...bike} />
          ))}
        </div>
      </div>
    </section>
  );
}
