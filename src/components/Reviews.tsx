import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

/**
 * Reviews section.
 *
 * NOTE: This component intentionally contains NO testimonials and NO
 * AggregateRating / Review structured data. Fabricated reviews and ratings
 * violate Google's structured-data policies (risk of manual action) and the
 * FTC endorsement guidelines.
 *
 * Once the Google Business Profile is live and has real reviews:
 *   1. Set GOOGLE_REVIEW_URL / GOOGLE_PROFILE_URL below.
 *   2. Either embed a real Google reviews widget, or add an AggregateRating
 *      JSON-LD block on the Home page using the REAL ratingValue and
 *      reviewCount pulled from the profile.
 */

// TODO: replace with the real "leave a review" short link once GBP is verified
const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=ET+Steam+Carpet+Cleaning+San+Luis+Obispo';
const YELP_URL = 'https://www.yelp.com/biz/et-steam-carpet-cleaning-san-luis-obispo';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Reviews &amp; References
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We&apos;re a local family business and most of our work comes from word of
          mouth. Ask us for references from customers near you, or leave us a
          review to help other Central Coast families find us.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            <Star className="h-5 w-5" />
            Leave a Google review
          </a>
          <a
            href={YELP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border border-gray-300 hover:bg-gray-100 transition"
          >
            <ExternalLink className="h-5 w-5" />
            Find us on Yelp
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Prefer to talk to a past customer first? Call{' '}
          <a href="tel:+18057042301" className="text-blue-600 hover:underline">
            (805)&nbsp;704-2301
          </a>{' '}
          and we&apos;ll connect you with references in your area.
        </p>
      </div>
    </section>
  );
}
