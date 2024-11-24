import React from 'react';
import { Droplets, Sofa, Grid, Sprout, Dog, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-emerald-600" />,
      title: 'Steam Carpet Cleaning',
      description: 'Deep cleaning that removes dirt, stains, and allergens from your carpets.'
    },
    {
      icon: <Sofa className="h-8 w-8 text-emerald-600" />,
      title: 'Upholstery Cleaning',
      description: 'Refresh and restore your furniture to its original beauty.'
    },
    {
      icon: <Grid className="h-8 w-8 text-emerald-600" />,
      title: 'Tile & Grout Cleaning',
      description: 'Restore the shine to your tiles and remove dirt from grout lines.'
    },
    {
      icon: <Sprout className="h-8 w-8 text-emerald-600" />,
      title: 'Area Rug Cleaning',
      description: 'Specialized cleaning for all types of area rugs and materials.'
    },
    {
      icon: <Dog className="h-8 w-8 text-emerald-600" />,
      title: 'Pet Stain Removal',
      description: 'Effective treatment for pet accidents and odor elimination.'
    },
    {
      icon: <Building2 className="h-8 w-8 text-emerald-600" />,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for businesses and offices.'
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <button className="text-emerald-600 font-medium hover:text-emerald-700 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}