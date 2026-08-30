import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

/**
 * Reviews section.
 *
 * The Google Business Profile has real, verifiable reviews (currently 5.0 from a
 * handful of Google reviews). We link to them and show the honest count.
 *
 * We intentionally do NOT hard-code testimonials or an AggregateRating JSON-LD
 * block here: fabricated / self-serving ratings violate Google's structured-data
 * policies. If you later display real reviews collected on this site, add
 * AggregateRating with the REAL numbers at that point.
 *
 * When the count/rating change, update REVIEW_COUNT / REVIEW_RATING below.
 */

// Canonical Google Business Profile listing (from the Maps CID).
const GOOGLE_PROFILE_URL = 'https://www.google.com/maps?cid=6967332072097920562';
// TODO: replace with the official "get more reviews" short link from the GBP
// dashboard (looks like https://g.page/r/XXXXXXXX/review) so it opens the
// write-a-review box directly.
const GOOGLE_REVIEW_URL = GOOGLE_PROFILE_URL;
const YELP_URL = 'https://www.yelp.com/biz/et-steam-carpet-cleaning-san-luis-obispo';

const REVIEW_RATING = '5.0';
const REVIEW_COUNT = 7;

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What our customers say</h2>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">{REVIEW_RATING}</span>
          <span className="flex" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </span>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {REVIEW_COUNT} Google reviews
          </a>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We&apos;re a local family business and most of our work comes from word of
          mouth. Read our reviews on Google, or leave one to help other Central
          Coast families find us.
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
          Want to talk to a past customer first? Call{' '}
          <a href="tel:+18057042301" className="text-blue-600 hover:underline">
            (805)&nbsp;704-2301
          </a>{' '}
          and we&apos;ll connect you with references in your area.
        </p>
      </div>
    </section>
  );
}
