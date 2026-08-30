import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import LocalSeoContent from '../components/LocalSeoContent';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/Services';
import Reviews from '../components/Reviews';

// Only the Leaflet map stays lazy (heavy, non-essential, client-only).
const ServiceArea = lazy(() => import('../components/ServiceArea'));

export default function Home() {
  // LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "E.T Carpet Cleaning",
    "image": "https://etsteamcarpetcleaning.com/logo.png",
    "telephone": "+1-805-704-2301",
    "email": "contact@etsteamcarpetcleaning.com",
    "url": "https://etsteamcarpetcleaning.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Luis Obispo",
      "addressRegion": "CA",
      "postalCode": "93401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.282752,
      "longitude": -120.659616
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "San Luis Obispo" },
      { "@type": "City", "name": "Pismo Beach" },
      { "@type": "City", "name": "Arroyo Grande" },
      { "@type": "City", "name": "Morro Bay" },
      { "@type": "City", "name": "Los Osos" },
      { "@type": "City", "name": "Atascadero" },
      { "@type": "City", "name": "Paso Robles" }
    ],
    "sameAs": [
      "https://www.facebook.com/etsteamcarpetcleaning/",
      "https://www.instagram.com/etsteamcarpetcleaning",
      "https://x.com/EtCarpetSteam",
      "https://www.yelp.com/biz/et-steam-carpet-cleaning-san-luis-obispo",
      "https://www.youtube.com/@e.t.carpetcleaning"
    ]
    // NOTE: no "aggregateRating" here on purpose. Add it back ONLY with the
    // real values once the Google Business Profile has verified reviews.
  };

  // NOTE: FAQPage schema lives on /faq only (that's where the FAQ content is).
  // Google flags FAQPage markup on pages without a visible FAQ.
  // NOTE: VideoObject schema removed - it pointed to /video.mp4 and
  // /video-thumbnail.jpg, which return 404. Add it back only when a real
  // video is hosted (e.g. a YouTube embed) with a valid thumbnail + contentUrl.

  const jsonLd = localBusinessSchema;

  return (
    <>
      <SEO
        title="Professional Carpet Cleaning San Luis Obispo | E.T Carpet Cleaning"
        description="Expert steam carpet cleaning in San Luis Obispo, Pismo Beach, Arroyo Grande & surrounding areas. Eco-friendly solutions, pet stain removal, upholstery cleaning. Call (805) 704-2301 for booking."
        canonical="/"
        image="https://etsteamcarpetcleaning.com/og-image.jpg"
        jsonLd={jsonLd}
      />
      <Hero />
      <WhyChooseUs />
      <div className="text-center py-8 bg-gray-50">
        <p className="text-gray-600 mb-4">Have questions about our services?</p>
        <Link to="/faq" className="text-blue-600 hover:underline font-medium">
          Check our FAQ section →
        </Link>
      </div>
      <ServicesSection />
      <LocalSeoContent />
      <Reviews />
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64" />}>
        <ServiceArea />
      </Suspense>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Carpets?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience the E.T Carpet Cleaning difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold"
            >
              Contact Us
            </Link>
            <Link
              to="/booking"
              className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}