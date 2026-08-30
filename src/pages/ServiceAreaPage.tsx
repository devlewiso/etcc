import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle2, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import NotFound from './NotFound';
import { getServiceArea, SERVICE_AREAS } from '../data/serviceAreas';

export default function ServiceAreaPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = getServiceArea(slug);

  if (!area) return <NotFound />;

  const canonical = `/service-area/${area.slug}`;
  const title = `Carpet Cleaning in ${area.city}, CA | E.T Carpet Cleaning`;
  const description = `Professional steam carpet cleaning, upholstery, tile & grout and pet stain removal in ${area.city}, CA. ${area.metaTail} Call (805) 704-2301.`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Carpet Cleaning',
      name: `Carpet Cleaning in ${area.city}, CA`,
      description,
      provider: {
        '@type': 'LocalBusiness',
        name: 'E.T Carpet Cleaning',
        telephone: '+1-805-704-2301',
        url: 'https://etsteamcarpetcleaning.com',
      },
      areaServed: {
        '@type': 'City',
        name: `${area.city}, CA`,
      },
    },
  ];

  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <div className="py-24">
      <SEO title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <Breadcrumbs
        items={[
          { name: 'Service Areas', path: '/#service-areas' },
          { name: area.city, path: canonical },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-blue-600 mb-3">
          <MapPin className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wide">
            {area.city}, San Luis Obispo County
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Carpet Cleaning in {area.city}, CA
        </h1>

        <p className="text-lg text-gray-700 mb-4">{area.intro}</p>
        <p className="text-gray-600 mb-8">{area.local}</p>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-10">
          <p className="text-blue-900 font-medium mb-1">{area.coverage}</p>
          <p className="text-blue-800 text-sm">
            Free estimates &bull; Licensed &amp; insured &bull; 100% satisfaction guarantee
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What we clean most in {area.city}
        </h2>
        <ul className="space-y-3 mb-10">
          {area.common.map((item) => (
            <li key={item} className="flex items-start text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our cleaning process</h2>
        <ol className="space-y-3 mb-10 text-gray-700 list-decimal list-inside">
          <li>Pre-inspection &mdash; we assess carpet condition and flag problem areas.</li>
          <li>Pre-treatment &mdash; targeted solutions break down dirt, traffic lanes and spots.</li>
          <li>Hot-water extraction at up to 260&deg;F to pull out dirt, allergens and odor.</li>
          <li>Grooming and drying &mdash; we set the pile and help airflow so carpets dry in 6&ndash;24 hours.</li>
        </ol>

        <div className="bg-gray-900 text-white rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Book carpet cleaning in {area.city}</h2>
          <p className="text-gray-300 mb-6">
            Call or text for a free, no-obligation quote. Same-day slots are often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18057042301"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              <Phone className="h-5 w-5" />
              (805) 704-2301
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Book online
            </Link>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby areas we serve</h2>
        <div className="flex flex-wrap gap-2">
          {otherAreas.map((a) => (
            <Link
              key={a.slug}
              to={`/service-area/${a.slug}`}
              className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition text-sm"
            >
              Carpet cleaning in {a.city}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
