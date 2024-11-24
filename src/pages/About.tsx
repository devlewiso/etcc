import React from 'react';
import { Users, Award, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About E.T Carpet Cleaning
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bringing interstellar cleanliness to San Luis Obispo since 2010
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, E.T Carpet Cleaning has been providing exceptional cleaning services
              to San Luis Obispo and surrounding areas. Our commitment to quality, eco-friendly
              practices, and customer satisfaction has made us the most trusted name in carpet cleaning.
            </p>
            <p className="text-gray-600">
              We believe in using the latest technology and environmentally conscious products
              to deliver outstanding results while protecting your family's health and our planet.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Team at work"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">13+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on the quality of our service.'
              },
              {
                title: 'Eco-Friendly',
                description: 'Committed to using environmentally safe cleaning solutions.'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our top priority.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}