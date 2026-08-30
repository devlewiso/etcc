import React from 'react';
import { MapPin, Star } from 'lucide-react';

/**
 * Embeds the real Google Business Profile map for E.T Carpet Cleaning.
 * Embedding your own GBP on the site is a small local-SEO trust signal and
 * gives visitors a one-click path to the listing, reviews and directions.
 *
 * The `pb=` string is Google's opaque embed payload for this exact place
 * (CID 0x...:0x60b0ef9ae5953632). Region set to US.
 */

const EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52117.725349673005!2d-120.67047994999999!3d35.272228500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc8e73b4342a2d05%3A0x60b0ef9ae5953632!2sE.T%20Carpet%20Cleaning!5e0!3m2!1sen!2sus!4v1788117108075!5m2!1sen!2sus';

const PROFILE_URL = 'https://www.google.com/maps?cid=6967332072097920562';

export default function GoogleBusinessMap({
  heading = 'Find us on Google',
}: {
  heading?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-gray-100">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <MapPin className="h-5 w-5 text-blue-600" />
          {heading}
        </h3>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
        >
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          5.0 on Google &rarr;
        </a>
      </div>
      <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
        <iframe
          src={EMBED_SRC}
          title="E.T Carpet Cleaning on Google Maps"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
