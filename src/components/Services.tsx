import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Sofa, Grid, Sprout, Dog, Building2 } from 'lucide-react';
import { SERVICES } from '../data/services';

const ICONS: Record<string, JSX.Element> = {
  'steam-carpet-cleaning': <Droplets className="h-8 w-8 text-emerald-600" />,
  'upholstery-cleaning': <Sofa className="h-8 w-8 text-emerald-600" />,
  'tile-and-grout-cleaning': <Grid className="h-8 w-8 text-emerald-600" />,
  'area-rug-cleaning': <Sprout className="h-8 w-8 text-emerald-600" />,
  'pet-stain-removal': <Dog className="h-8 w-8 text-emerald-600" />,
  'commercial-cleaning': <Building2 className="h-8 w-8 text-emerald-600" />,
};

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="mb-4">{ICONS[service.slug]}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.short}</p>
              <span className="text-emerald-600 font-medium hover:text-emerald-700 transition">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
