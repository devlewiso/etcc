import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <div className="py-32">
      <Helmet>
        <title>Page not found | E.T Carpet Cleaning</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">404</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">We couldn&apos;t find that page</h1>
        <p className="text-gray-600 mb-8">
          The page may have moved. Try one of these, or call{' '}
          <a href="tel:+18057042301" className="text-blue-600 hover:underline">
            (805)&nbsp;704-2301
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition">
            Home
          </Link>
          <Link to="/services" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/booking" className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition">
            Book now
          </Link>
        </div>
      </div>
    </div>
  );
}
