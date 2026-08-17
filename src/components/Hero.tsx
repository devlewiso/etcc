import React from 'react';
import { ArrowRight, Phone, CreditCard, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-white">
      {/* Main Hero Section */}
      <div className="relative min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white/90">Schedule an Appointment:</h2>
              <a 
                href="tel:+18057042301" 
                className="text-2xl font-bold text-blue-400 hover:text-blue-300"
              >
                +1 (805) 704-2301
              </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Carpet Cleaning in San Luis Obispo
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Expert cleaning services with state-of-the-art technology and eco-friendly solutions.
              Licensed, insured, and 100% satisfaction guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/booking" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+18057042301"
                className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Info Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700">All Major Credit Cards Accepted</span>
            </div>
            <div className="flex items-center justify-center">
              <Wallet className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700">Check, Venmo & Cash Accepted</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-semibold text-gray-900">$145.00 Minimum Charge</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-blue-600 font-semibold">100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ultra-Modern Cleaning Technology
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At E.T Carpet Cleaning, we combine a customer-centric approach with cutting-edge cleaning technology.
              Our technicians use special UV lights to detect and remove even the smallest and hidden stains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <svg className="h-12 w-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Advanced UV Technology
              </h3>
              <p className="text-gray-600 text-center">
                Our technicians use special UV lights to detect and remove even the smallest and hidden stains that regular cleaning might miss.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">
                <svg className="h-12 w-12 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                Background-Checked Professionals
              </h3>
              <p className="text-gray-600 text-center">
                We are a close-knit team of experienced cleaning experts. All professionals undergo rigorous background checks for your safety and peace of mind.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3">Important Information:</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Restrictions May Apply
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Price can vary depending on size, special treatments or severity of carpet
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                We do not service Creston or San Simeon
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Additional fuel fees apply to servicing Cambria, Cayucos & Heritage Ranch
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}