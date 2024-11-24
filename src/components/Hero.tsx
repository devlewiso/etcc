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
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ultra-Modern Cleaning Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At E.T Carpet Cleaning, we combine a customer-centric approach with cutting-edge cleaning technology. 
              Our technicians use special UV lights to detect and remove even the smallest and hidden stains.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 text-center">
              We are a close-knit team of experienced cleaning experts. We conduct a rigorous background check 
              of all our professionals to ensure customer safety and peace of mind.
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p>* Restrictions May Apply</p>
            <p>* Price can vary depending on size, special treatments or severity of carpet</p>
            <p>* We do not service Creston or San Simeon</p>
            <p>* Additional fuel fees apply to servicing Cambria, Cayucos & Heritage Ranch</p>
          </div>
        </div>
      </div>
    </div>
  );
}