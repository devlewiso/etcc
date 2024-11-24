import React from 'react';
import { Leaf, Shield, Star, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Why Choose Us?
        </h2>
        
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Our team uses the latest technology and eco-friendly products to ensure your carpets are not only clean but also safe for you and your family.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Leaf className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              Safe, environmentally conscious cleaning solutions
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Professional Team
            </h3>
            <p className="text-gray-600">
              Experienced and highly skilled cleaners
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Quality Results
            </h3>
            <p className="text-gray-600">
              Guaranteed satisfaction with every service
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Timely Service
            </h3>
            <p className="text-gray-600">
              Prompt and efficient cleaning solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}