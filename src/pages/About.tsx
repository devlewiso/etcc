import React from 'react';
import { Users, Award, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function About() {
  // NOTE: founding year and any customer/project counts are pending
  // confirmation from the owner (see Reporte Auditoria/07-preguntas-para-papa.md).
  // Founding year: 2023 (owner's estimate - "started ~3 years ago"). No
  // customer/project counts and no aggregateRating until those are verified.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About E.T Carpet Cleaning",
    "description": "Learn about E.T Carpet Cleaning - a local, family-run, eco-friendly carpet cleaning company serving San Luis Obispo County since 2023.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "E.T Carpet Cleaning",
      "description": "A local, family-run carpet cleaning company on California's Central Coast, serving SLO County since 2023. Our focus is honest pricing, eco-friendly cleaning, and meticulous work.",
      "foundingDate": "2023",
      "telephone": "+1-805-704-2301",
      "email": "contact@etsteamcarpetcleaning.com",
      "url": "https://etsteamcarpetcleaning.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Luis Obispo",
        "addressRegion": "CA",
        "postalCode": "93401",
        "addressCountry": "US"
      }
    }
  };
  return (
    <div className="py-24">
      <SEO
        title="About Us | E.T Carpet Cleaning San Luis Obispo"
        description="E.T Carpet Cleaning is a local, family-run, eco-friendly carpet cleaning company serving San Luis Obispo, Pismo Beach, Arroyo Grande, Paso Robles and the Central Coast since 2023."
        canonical="/about"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About E.T Carpet Cleaning
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A local, family-run carpet cleaning company serving the Central Coast since 2023
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              E.T Carpet Cleaning is a local, family-run business serving San Luis Obispo
              County and the Central Coast since 2023. We started with a simple goal:
              honest pricing and careful, thorough work on every job.
            </p>
            <p className="text-gray-600">
              We use modern hot-water extraction equipment, UV inspection to find hidden
              stains, and eco-friendly, non-toxic cleaning solutions that are safe for your
              family, your pets, and the environment.
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

        {/* What sets us apart */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-xl font-bold text-gray-900 mb-2">Family-Run &amp; Local</div>
            <div className="text-gray-600">You deal directly with the owner, not a call center</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-xl font-bold text-gray-900 mb-2">Background-Checked Team</div>
            <div className="text-gray-600">Every technician is vetted for your peace of mind</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <Calendar className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</div>
            <div className="text-gray-600">If you&apos;re not happy, we make it right</div>
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