import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import NotFound from './NotFound';
import { getService, SERVICES } from '../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const canonical = `/services/${service.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      name: service.name,
      description: service.metaDescription,
      provider: {
        '@type': 'LocalBusiness',
        name: 'E.T Carpet Cleaning',
        telephone: '+1-805-704-2301',
        url: 'https://etsteamcarpetcleaning.com',
      },
      areaServed: { '@type': 'AdministrativeArea', name: 'San Luis Obispo County, CA' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="py-24">
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        jsonLd={jsonLd}
      />
      <Breadcrumbs
        items={[
          { name: 'Services', path: '/services' },
          { name: service.name, path: canonical },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.name} in San Luis Obispo County</h1>
        <p className="text-lg text-gray-700 mb-10">{service.intro}</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <a
            href="tel:+18057042301"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            <Phone className="h-5 w-5" />
            Call for a free quote
          </a>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Book online
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s included</h2>
        <ul className="space-y-3 mb-14">
          {service.included.map((item) => (
            <li key={item} className="flex items-start text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">How it works</h2>
        <ol className="space-y-6 mb-14">
          {service.process.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
        <ul className="space-y-2 mb-4 text-gray-700 list-disc list-inside">
          {service.pricing.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mb-14">
          Prices vary with size, condition and treatments. We always give a firm quote before we start.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
        <div className="space-y-6 mb-14">
          {service.faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-gray-900 mb-1">{f.q}</h3>
              <p className="text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-8 text-center mb-14">
          <h2 className="text-2xl font-bold mb-2">Get a free quote for {service.name.toLowerCase()}</h2>
          <p className="text-gray-300 mb-6">
            Serving San Luis Obispo, Pismo Beach, Arroyo Grande, Paso Robles and the Central Coast.
          </p>
          <a
            href="tel:+18057042301"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            <Phone className="h-5 w-5" />
            (805) 704-2301
          </a>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Related services</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/services/${r.slug}`}
              className="group rounded-xl border border-gray-200 p-4 hover:border-blue-600 transition"
            >
              <p className="font-semibold text-gray-900 group-hover:text-blue-600">{r.name}</p>
              <p className="text-sm text-gray-500 mt-1">{r.short}</p>
              <span className="mt-2 inline-flex items-center text-sm text-blue-600">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10">
          <Link to="/services" className="text-blue-600 hover:underline">
            &larr; All services
          </Link>
        </p>
      </div>
    </div>
  );
}

export { SERVICES };
