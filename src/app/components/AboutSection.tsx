import { Award, Shield, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest motorcycles from top manufacturers worldwide'
  },
  {
    icon: Shield,
    title: 'Warranty Protected',
    description: 'Comprehensive warranty coverage on all our bikes'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated team to help you find your perfect ride'
  },
  {
    icon: Wrench,
    title: 'Service & Maintenance',
    description: 'Professional maintenance and repair services available'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about motorcycles and committed to providing the best experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <feature.icon size={32} className="text-red-600" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
