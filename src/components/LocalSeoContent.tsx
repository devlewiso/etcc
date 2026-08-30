import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Local SEO Content Component
 * Provides keyword-rich content for local search optimization
 * Targets: San Luis Obispo carpet cleaning, Pismo Beach, Arroyo Grande, etc.
 */

export default function LocalSeoContent() {
  return (
    <section className="py-16 bg-white" aria-label="Local service information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content for SEO */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Professional Carpet Cleaning in San Luis Obispo County
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
Your Local Central Coast Carpet Cleaners
              </h3>
              <p className="text-gray-600 mb-4">
                E.T Carpet Cleaning is your local expert for professional steam carpet cleaning
                in San Luis Obispo, Pismo Beach, Arroyo Grande, Morro Bay, Los Osos, Atascadero,
                and Paso Robles. Our certified technicians use state-of-the-art hot water extraction
                equipment to remove dirt, stains, allergens, and odors from your carpets.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in residential and commercial <Link to="/services" className="text-blue-600 hover:underline">carpet cleaning</Link>, <Link to="/services" className="text-blue-600 hover:underline">upholstery cleaning</Link>,
                <Link to="/services" className="text-blue-600 hover:underline"> tile and grout cleaning</Link>, <Link to="/services" className="text-blue-600 hover:underline">area rug cleaning</Link>, and <Link to="/services" className="text-blue-600 hover:underline">pet stain removal</Link>. Our eco-friendly
                cleaning solutions are safe for your family, pets, and the environment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                Why Choose Professional Steam Cleaning?
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Learn more in our <Link to="/faq" className="text-blue-600 hover:underline">FAQ section</Link>
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Removes 99% of dirt, bacteria, and allergens
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Extends carpet life and maintains warranty
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Eliminates pet odors and tough stains
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Eco-friendly, non-toxic cleaning solutions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Fast drying time (6-24 hours)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Service Areas on the Central Coast
              </h3>
              <p className="text-gray-600 mb-4">
                We proudly serve communities throughout San Luis Obispo County. Our local
                technicians know the unique cleaning challenges of Central Coast homes and businesses.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">San Luis Obispo</h4>
                  <p className="text-sm text-gray-600">Full service coverage</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Pismo Beach</h4>
                  <p className="text-sm text-gray-600">Same-day service</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Arroyo Grande</h4>
                  <p className="text-sm text-gray-600">Weekly availability</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Morro Bay</h4>
                  <p className="text-sm text-gray-600">Full service coverage</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Los Osos</h4>
                  <p className="text-sm text-gray-600">Bi-weekly service</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Atascadero</h4>
                  <p className="text-sm text-gray-600">Full service coverage</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Paso Robles</h4>
                  <p className="text-sm text-gray-600">Wine country special</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Cambria</h4>
                  <p className="text-sm text-gray-600">Fuel fee applies</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  📞 Call us today at <a href="tel:+18057042301" className="underline hover:text-blue-600">(805) 704-2301</a>
                </p>
                <p className="text-blue-600 text-sm">
                  Free estimates • Licensed & Insured • 100% Satisfaction Guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Additional SEO Content */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Carpet Cleaning Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Pre-Inspection</h4>
                <p className="text-sm text-gray-600">We assess carpet condition and identify problem areas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Pre-Treatment</h4>
                <p className="text-sm text-gray-600">Special solutions break down dirt and stains</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Steam Extraction</h4>
                <p className="text-sm text-gray-600">Hot water extraction at 260°F removes contaminants</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Grooming & Drying</h4>
                <p className="text-sm text-gray-600">Fast drying with proper air circulation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
