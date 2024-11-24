import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, Sofa, Grid, Sprout, Dog, Building2, CheckCircle2, ArrowRight, 
  Bed, Fan, Shield, Sparkles, Home, Briefcase
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: 'Carpet Cleaning',
      description: 'Professional deep cleaning for all carpet types.',
      features: [
        'Commercial Carpet Cleaning - $0.50/sq ft',
        'High Traffic Areas',
        'Deep stain removal',
        'Eco-friendly solutions'
      ],
      pricing: 'Custom quotes available'
    },
    {
      icon: <Sofa className="h-12 w-12 text-blue-600" />,
      title: 'Upholstery Cleaning',
      description: 'Expert cleaning for all types of furniture.',
      features: [
        'Sectional - $275',
        'Couch/Sofa - $180',
        'Love Seat - $140',
        'Arm Chair - $60'
      ],
      pricing: 'Based on size and material'
    },
    {
      icon: <Bed className="h-12 w-12 text-blue-600" />,
      title: 'Mattress Cleaning',
      description: 'Deep cleaning and sanitization for all mattress sizes.',
      features: [
        'King/Cal King - $175',
        'Queen - $150',
        'Full - $135',
        'Twin - $125'
      ],
      pricing: 'Includes sanitization'
    },
    {
      icon: <Grid className="h-12 w-12 text-blue-600" />,
      title: 'Floor Care',
      description: 'Specialized cleaning for various floor types.',
      features: [
        'Tile & Grout - $1.00-$1.50/sq ft ($150 min)',
        'Laminate & Wood - $0.65/sq ft ($125 min)',
        'Travertine & Stone',
        'Grout sealing available'
      ],
      pricing: 'Starting at $125'
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Protection Services',
      features: [
        'Carpet Guard - $20/room',
        'Couch Guard (6 cushion) - Custom',
        'Sectional Guard (16 cushion) - Custom',
        'Arm Chair Guard - Custom'
      ],
      pricing: 'From $20/room'
    },
    {
      icon: <Sprout className="h-12 w-12 text-blue-600" />,
      title: 'Area Rug Cleaning',
      features: [
        '10x12 - $90',
        '8x10 - $80',
        '5x7 - $60',
        '4x6 - $40'
      ],
      pricing: 'Size-based pricing'
    },
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Residential Services',
      features: [
        'Make carpet fluffy again - $75',
        'Pet stain removal',
        'Odor elimination',
        'Move-in/out cleaning'
      ],
      pricing: 'Custom quotes available'
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      title: 'Commercial Services',
      features: [
        'Regular maintenance plans',
        'After-hours service',
        'Multi-room discounts',
        'Emergency cleaning'
      ],
      pricing: 'Contract rates available'
    }
  ];

  const extraServices = [
    {
      icon: <Fan className="h-8 w-8 text-blue-600" />,
      title: 'Fan Rental',
      description: 'Speed up the drying process',
      price: '$25/day per fan'
    },
    {
      icon: <Dog className="h-8 w-8 text-blue-600" />,
      title: 'Flea Treatment',
      description: 'Specialized pest control for carpets',
      price: 'Custom quote'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: 'Additional Services',
      description: 'Fuel fees and special treatments',
      price: 'From $5'
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Services Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions for your home and business, backed by our satisfaction guarantee
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-6">
                {service.icon}
                <h2 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold">{service.pricing}</span>
                <Link 
                  to="/booking" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-blue-600 font-semibold">{service.pricing}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {extraServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold">{service.price}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Not sure which service you need? Contact us for a free consultation and custom quote.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center"
            >
              Schedule Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+18057042301"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Call (805) 704-2301
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}