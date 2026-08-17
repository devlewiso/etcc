import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  article?: {
    publishedTime: string;
    author: string;
  };
  jsonLd?: Record<string, unknown>;
}

const BASE_URL = 'https://etsteamcarpetcleaning.com';
const DEFAULT_IMAGE = '/og-image.jpg';

export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  article,
  jsonLd
}: SEOProps) {
  const fullTitle = `${title} | E.T Carpet Cleaning`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  // Default JSON-LD for LocalBusiness
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "E.T Carpet Cleaning",
    "image": `${BASE_URL}/logo.png`,
    "telephone": "+1-805-704-2301",
    "email": "contact@etsteamcarpetcleaning.com",
    "url": BASE_URL,
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
      "https://x.com/EtCarpetSteam"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />


      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@EtCarpetSteam" />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="carpet cleaning, steam cleaning, upholstery cleaning, tile grout cleaning, San Luis Obispo, professional cleaners" />
      <meta name="author" content="E.T Carpet Cleaning" />

      {/* Geo Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="San Luis Obispo" />
      <meta name="geo.position" content="35.282752;-120.659616" />
      <meta name="ICBM" content="35.282752, -120.659616" />

      {/* Article-specific tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
        </>
      )}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
}
