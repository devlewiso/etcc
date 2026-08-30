import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getPublishedPosts } from '../data/blog';

const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export default function BlogIndex() {
  const posts = getPublishedPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'E.T Carpet Cleaning Blog',
    description:
      'Carpet, upholstery and tile cleaning tips for San Luis Obispo County homes and businesses.',
    url: 'https://etsteamcarpetcleaning.com/blog',
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      datePublished: p.publishedDate,
      url: `https://etsteamcarpetcleaning.com/blog/${p.slug}`,
    })),
  };

  return (
    <div className="py-24">
      <SEO
        title="Carpet Cleaning Tips & Guides | E.T Carpet Cleaning Blog"
        description="Practical carpet, upholstery and tile cleaning advice for San Luis Obispo County: pricing, pet stains, how often to clean, and Central Coast-specific tips."
        canonical="/blog"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Carpet cleaning tips &amp; guides</h1>
        <p className="text-lg text-gray-600 mb-12">
          Straight advice on carpet, upholstery and tile care for Central Coast homes and
          businesses &mdash; from a local, family-run cleaner.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-600">New articles are on the way. Check back soon.</p>
        ) : (
          <div className="space-y-10">
            {posts.map((p) => (
              <article key={p.slug} className="border-b border-gray-200 pb-10 last:border-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  <Link to={`/blog/${p.slug}`} className="hover:text-blue-600 transition">
                    {p.title}
                  </Link>
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {fmtDate(p.publishedDate)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {p.readMinutes} min read
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{p.description}</p>
                <Link
                  to={`/blog/${p.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Need it cleaned, not just read about?</h2>
          <p className="text-gray-300 mb-6">Free quote for San Luis Obispo County and the Central Coast.</p>
          <a
            href="tel:+18057042301"
            className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            (805) 704-2301
          </a>
        </div>
      </div>
    </div>
  );
}
