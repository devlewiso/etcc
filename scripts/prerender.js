/**
 * Pre-rendering script for E.T Carpet Cleaning
 * Uses react-dom/server for true Server-Side Rendering
 * Generates static HTML files with React content pre-rendered
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render
const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'E.T Carpet Cleaning | Professional Carpet Cleaning San Luis Obispo',
    description: 'Professional steam carpet cleaning in San Luis Obispo, Pismo Beach, Arroyo Grande & surrounding areas. Eco-friendly solutions, pet stain removal.',
    keywords: 'carpet cleaning San Luis Obispo, steam cleaning, upholstery cleaning, professional cleaners',
    ogImage: '/og-home.jpg'
  },
  {
    path: '/services',
    file: 'services.html',
    title: 'Our Services | Carpet Cleaning, Upholstery, Tile & Grout',
    description: 'Professional carpet cleaning services: steam cleaning, upholstery, tile & grout, area rugs, pet stain removal, commercial cleaning.',
    keywords: 'carpet cleaning services, upholstery cleaning, tile grout cleaning, pet stain removal',
    ogImage: '/og-services.jpg'
  },
  {
    path: '/about',
    file: 'about.html',
    title: 'About Us | E.T Carpet Cleaning San Luis Obispo',
    description: 'Learn about E.T Carpet Cleaning - providing exceptional eco-friendly carpet cleaning services in San Luis Obispo since 2010.',
    keywords: 'about carpet cleaning, San Luis Obispo cleaners, eco-friendly cleaning',
    ogImage: '/og-about.jpg'
  },
  {
    path: '/contact',
    file: 'contact.html',
    title: 'Contact Us | E.T Carpet Cleaning',
    description: 'Get in touch with E.T Carpet Cleaning. Call (805) 704-2301 or send us a message for professional carpet cleaning in San Luis Obispo.',
    keywords: 'contact carpet cleaning, San Luis Obispo phone number, booking',
    ogImage: '/og-contact.jpg'
  },
  {
    path: '/faq',
    file: 'faq.html',
    title: 'FAQ | Carpet Cleaning Questions Answered',
    description: 'Find answers to common questions about our carpet cleaning services: pricing, drying time, pet stains, service areas.',
    keywords: 'carpet cleaning FAQ, how often clean carpets, pet stain removal',
    ogImage: '/og-faq.jpg'
  },
  {
    path: '/booking',
    file: 'booking.html',
    title: 'Book Now | Schedule Carpet Cleaning Service',
    description: 'Schedule your professional carpet cleaning service online. Easy booking for San Luis Obispo and surrounding areas.',
    keywords: 'book carpet cleaning, schedule cleaning service, appointment',
    ogImage: '/og-booking.jpg'
  },
  {
    path: '/privacy-policy',
    file: 'privacy-policy.html',
    title: 'Privacy Policy | E.T Carpet Cleaning',
    description: 'Privacy policy for E.T Carpet Cleaning services in San Luis Obispo, CA. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, personal information, carpet cleaning San Luis Obispo',
    ogImage: '/og-privacy.jpg'
  }
];

// Service area pages for local SEO
const serviceAreas = [
  'San Luis Obispo',
  'Pismo Beach',
  'Arroyo Grande',
  'Morro Bay',
  'Los Osos',
  'Atascadero',
  'Paso Robles'
];

const distDir = path.join(__dirname, '../dist');

// Ensure directories exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Read the main index.html template
const templatePath = path.join(distDir, 'index.html');
let baseTemplate = '';

if (fs.existsSync(templatePath)) {
  baseTemplate = fs.readFileSync(templatePath, 'utf-8');
} else {
  console.error('Error: dist/index.html not found. Run "npm run build:only" first.');
  process.exit(1);
}

// Function to update meta tags in HTML
function updateMetaTags(html, route) {
  // Update title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );

  // Update meta description
  html = html.replace(
    /<meta name="description" content=".*?"/,
    `<meta name="description" content="${route.description}"`
  );

  // Update keywords
  html = html.replace(
    /<meta name="keywords" content=".*?"/,
    `<meta name="keywords" content="${route.keywords}"`
  );

  // Update canonical URL
  const canonicalUrl = `https://etsteamcarpetcleaning.com${route.path}`;
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Update Open Graph tags
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );

  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );

  // Update Twitter Card tags
  html = html.replace(
    /<meta name="twitter:url" content=".*?" \/>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );

  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  return html;
}

// Generate critical SSR content for each page
// This is a hybrid approach - render the critical above-the-fold content as static HTML
function generateSSRContent(routePath) {
  switch (routePath) {
    case '/':
      return generateHomeSSR();
    case '/services':
      return generateServicesSSR();
    case '/about':
      return generateAboutSSR();
    case '/contact':
      return generateContactSSR();
    case '/faq':
      return generateFAQSSR();
    case '/booking':
      return generateBookingSSR();
    case '/privacy-policy':
      return generatePrivacyPolicySSR();
    default:
      return null;
  }
}

// Home page SSR content
function generateHomeSSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    // Hero Section
    React.createElement('section', { className: 'relative h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800' },
      React.createElement('div', { className: 'absolute inset-0 bg-black opacity-50' }),
      React.createElement('div', { className: 'relative z-10 text-center text-white px-4' },
        React.createElement('h1', { className: 'text-5xl md:text-6xl font-bold mb-6' }, 'Professional Carpet Cleaning in San Luis Obispo'),
        React.createElement('p', { className: 'text-xl md:text-2xl mb-8 max-w-3xl mx-auto' }, 'Expert steam carpet cleaning services. Eco-friendly solutions, pet stain removal, and upholstery cleaning.'),
        React.createElement('a', { href: 'tel:+18057042301', className: 'inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition' }, 'Call (805) 704-2301')
      )
    ),
    // Services Preview
    React.createElement('section', { className: 'py-20 bg-gray-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h2', { className: 'text-4xl font-bold text-center mb-12 text-gray-900' }, 'Our Services'),
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8' },
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-3 text-blue-600' }, 'Steam Carpet Cleaning'),
            React.createElement('p', { className: 'text-gray-600' }, 'Deep steam cleaning that removes dirt, allergens, and bacteria from your carpets.')
          ),
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-3 text-blue-600' }, 'Upholstery Cleaning'),
            React.createElement('p', { className: 'text-gray-600' }, 'Professional cleaning for all types of furniture and fabric.')
          ),
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-3 text-blue-600' }, 'Tile & Grout Cleaning'),
            React.createElement('p', { className: 'text-gray-600' }, 'Restore your tile and grout to their original beauty.')
          )
        )
      )
    ),
    // Why Choose Us
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h2', { className: 'text-4xl font-bold text-center mb-12 text-gray-900' }, 'Why Choose E.T Carpet Cleaning?'),
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-8' },
          React.createElement('div', { className: 'text-center' },
            React.createElement('div', { className: 'text-4xl font-bold text-blue-600 mb-2' }, '13+'),
            React.createElement('p', { className: 'text-gray-600' }, 'Years Experience')
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('div', { className: 'text-4xl font-bold text-blue-600 mb-2' }, '5000+'),
            React.createElement('p', { className: 'text-gray-600' }, 'Projects Completed')
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('div', { className: 'text-4xl font-bold text-blue-600 mb-2' }, '1000+'),
            React.createElement('p', { className: 'text-gray-600' }, 'Happy Customers')
          ),
          React.createElement('div', { className: 'text-center' },
            React.createElement('div', { className: 'text-4xl font-bold text-blue-600 mb-2' }, '100%'),
            React.createElement('p', { className: 'text-gray-600' }, 'Satisfaction Guaranteed')
          )
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// Services page SSR content
function generateServicesSSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    React.createElement('section', { className: 'py-20 bg-blue-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h1', { className: 'text-5xl font-bold text-center mb-6 text-gray-900' }, 'Our Services'),
        React.createElement('p', { className: 'text-xl text-center text-gray-600 max-w-3xl mx-auto' }, 'Professional carpet and upholstery cleaning services in San Luis Obispo County')
      )
    ),
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8' },
          React.createElement('div', { className: 'bg-white p-8 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-2xl font-semibold mb-4 text-blue-600' }, 'Steam Carpet Cleaning'),
            React.createElement('p', { className: 'text-gray-600 mb-4' }, 'Our hot water extraction method deeply cleans carpets, removing dirt, allergens, and bacteria. Perfect for homes with children and pets.'),
            React.createElement('p', { className: 'text-blue-600 font-semibold' }, 'From $99 per room')
          ),
          React.createElement('div', { className: 'bg-white p-8 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-2xl font-semibold mb-4 text-blue-600' }, 'Upholstery Cleaning'),
            React.createElement('p', { className: 'text-gray-600 mb-4' }, 'Professional cleaning for sofas, chairs, and all fabric furniture. We use gentle yet effective methods.'),
            React.createElement('p', { className: 'text-blue-600 font-semibold' }, 'From $75 per piece')
          ),
          React.createElement('div', { className: 'bg-white p-8 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-2xl font-semibold mb-4 text-blue-600' }, 'Tile & Grout Cleaning'),
            React.createElement('p', { className: 'text-gray-600 mb-4' }, 'Restore your tile and grout to like-new condition. We remove years of built-up dirt and stains.'),
            React.createElement('p', { className: 'text-blue-600 font-semibold' }, 'From $1.50/sq ft')
          ),
          React.createElement('div', { className: 'bg-white p-8 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-2xl font-semibold mb-4 text-blue-600' }, 'Pet Stain Removal'),
            React.createElement('p', { className: 'text-gray-600 mb-4' }, 'Specialized treatment for pet stains and odors. Eco-friendly enzymes break down organic matter.'),
            React.createElement('p', { className: 'text-blue-600 font-semibold' }, 'From $50 per stain')
          )
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// About page SSR content
function generateAboutSSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    React.createElement('section', { className: 'py-20 bg-blue-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h1', { className: 'text-5xl font-bold text-center mb-6 text-gray-900' }, 'About E.T Carpet Cleaning'),
        React.createElement('p', { className: 'text-xl text-center text-gray-600 max-w-3xl mx-auto' }, 'Your trusted local carpet cleaning experts since 2010')
      )
    ),
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('h2', { className: 'text-3xl font-bold mb-6 text-gray-900' }, 'Our Story'),
        React.createElement('p', { className: 'text-gray-600 mb-6' }, 'E.T Carpet Cleaning has been serving San Luis Obispo County for over 13 years. We started as a small family business with a simple mission: provide honest, reliable, and high-quality carpet cleaning services at fair prices.'),
        React.createElement('p', { className: 'text-gray-600 mb-6' }, 'Today, we\'ve grown to become one of the most trusted carpet cleaning companies in the area, having completed over 5,000 projects and served more than 1,000 happy customers.'),
        React.createElement('h2', { className: 'text-3xl font-bold mb-6 mt-12 text-gray-900' }, 'Our Values'),
        React.createElement('ul', { className: 'list-disc list-inside text-gray-600 space-y-2' },
          React.createElement('li', null, 'Honesty and transparency in pricing'),
          React.createElement('li', null, 'Eco-friendly cleaning solutions safe for pets and children'),
          React.createElement('li', null, 'Professional, trained technicians'),
          React.createElement('li', null, '100% satisfaction guarantee')
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// Contact page SSR content
function generateContactSSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    React.createElement('section', { className: 'py-20 bg-blue-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h1', { className: 'text-5xl font-bold text-center mb-6 text-gray-900' }, 'Contact Us'),
        React.createElement('p', { className: 'text-xl text-center text-gray-600 max-w-3xl mx-auto' }, 'Get in touch for a free quote or to schedule your cleaning')
      )
    ),
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8' },
          React.createElement('div', null,
            React.createElement('h2', { className: 'text-2xl font-bold mb-6 text-gray-900' }, 'Contact Information'),
            React.createElement('div', { className: 'space-y-4' },
              React.createElement('p', { className: 'text-gray-600' }, React.createElement('strong', null, 'Phone: '), '(805) 704-2301'),
              React.createElement('p', { className: 'text-gray-600' }, React.createElement('strong', null, 'Email: '), 'contact@etsteamcarpetcleaning.com'),
              React.createElement('p', { className: 'text-gray-600' }, React.createElement('strong', null, 'Service Area: '), 'San Luis Obispo County'),
              React.createElement('p', { className: 'text-gray-600' }, React.createElement('strong', null, 'Hours: '), 'Mon-Sat: 8am - 6pm')
            )
          ),
          React.createElement('div', { className: 'bg-gray-50 p-6 rounded-lg' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-4 text-gray-900' }, 'Why Call Us?'),
            React.createElement('ul', { className: 'space-y-2 text-gray-600' },
              React.createElement('li', null, '✓ Free, no-obligation quotes'),
              React.createElement('li', null, '✓ Same-day service available'),
              React.createElement('li', null, '✓ Licensed and insured'),
              React.createElement('li', null, '✓ 100% satisfaction guarantee')
            )
          )
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// FAQ page SSR content
function generateFAQSSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    React.createElement('section', { className: 'py-20 bg-blue-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h1', { className: 'text-5xl font-bold text-center mb-6 text-gray-900' }, 'Frequently Asked Questions'),
        React.createElement('p', { className: 'text-xl text-center text-gray-600 max-w-3xl mx-auto' }, 'Find answers to common questions about our carpet cleaning services')
      )
    ),
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('div', { className: 'space-y-6' },
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-gray-900' }, 'How often should I clean my carpets?'),
            React.createElement('p', { className: 'text-gray-600' }, 'For most households, professional cleaning every 12-18 months is recommended. Homes with pets or children may benefit from cleaning every 3-6 months.')
          ),
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-gray-900' }, 'How long does it take for carpets to dry?'),
            React.createElement('p', { className: 'text-gray-600' }, 'Most carpets are dry within 4-6 hours after cleaning. Drying time depends on humidity, temperature, and airflow.')
          ),
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-gray-900' }, 'Are your cleaning products safe for pets?'),
            React.createElement('p', { className: 'text-gray-600' }, 'Yes! We use eco-friendly, non-toxic cleaning solutions that are safe for pets and children.')
          ),
          React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-md' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-2 text-gray-900' }, 'Do you offer same-day service?'),
            React.createElement('p', { className: 'text-gray-600' }, 'Yes, we offer same-day service when available. Call us at (805) 704-2301 to check availability.')
          )
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// Booking page SSR content
function generateBookingSSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    React.createElement('section', { className: 'py-20 bg-blue-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h1', { className: 'text-5xl font-bold text-center mb-6 text-gray-900' }, 'Book Your Service'),
        React.createElement('p', { className: 'text-xl text-center text-gray-600 max-w-3xl mx-auto' }, 'Schedule your professional carpet cleaning today')
      )
    ),
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('div', { className: 'bg-white p-8 rounded-lg shadow-md' },
          React.createElement('h2', { className: 'text-2xl font-semibold mb-6 text-gray-900' }, 'How to Book'),
          React.createElement('ol', { className: 'space-y-4 text-gray-600' },
            React.createElement('li', null, React.createElement('strong', null, '1. Call us: '), '(805) 704-2301'),
            React.createElement('li', null, React.createElement('strong', null, '2. Email: '), 'contact@etsteamcarpetcleaning.com'),
            React.createElement('li', null, React.createElement('strong', null, '3. Online: '), 'Fill out the form below'),
            React.createElement('li', null, React.createElement('strong', null, '4. WhatsApp: '), 'Message us directly')
          ),
          React.createElement('div', { className: 'mt-8 p-6 bg-blue-50 rounded-lg' },
            React.createElement('h3', { className: 'text-xl font-semibold mb-4 text-gray-900' }, 'What to Expect'),
            React.createElement('ul', { className: 'space-y-2 text-gray-600' },
              React.createElement('li', null, '✓ Free, no-obligation estimate'),
              React.createElement('li', null, '✓ Professional assessment of your carpets'),
              React.createElement('li', null, '✓ Customized cleaning plan'),
              React.createElement('li', null, '✓ Satisfaction guaranteed')
            )
          )
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// Privacy Policy page SSR content
function generatePrivacyPolicySSR() {
  const content = React.createElement('div', { className: 'ssr-content' },
    React.createElement('section', { className: 'py-20 bg-blue-50' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('h1', { className: 'text-5xl font-bold text-center mb-6 text-gray-900' }, 'Privacy Policy'),
        React.createElement('p', { className: 'text-xl text-center text-gray-600 max-w-3xl mx-auto' }, 'How we collect, use, and protect your personal information')
      )
    ),
    React.createElement('section', { className: 'py-20' },
      React.createElement('div', { className: 'max-w-4xl mx-auto px-4' },
        React.createElement('div', { className: 'prose prose-lg max-w-none' },
          React.createElement('h2', { className: 'text-2xl font-bold mb-4 text-gray-900' }, 'Information We Collect'),
          React.createElement('p', { className: 'text-gray-600 mb-4' }, 'We collect personal information that you voluntarily provide when requesting services, including name, email, phone number, and service address.'),
          React.createElement('h2', { className: 'text-2xl font-bold mb-4 mt-8 text-gray-900' }, 'How We Use Your Information'),
          React.createElement('p', { className: 'text-gray-600 mb-4' }, 'We use your information to provide and manage our carpet cleaning services, schedule appointments, respond to inquiries, and process payments.'),
          React.createElement('h2', { className: 'text-2xl font-bold mb-4 mt-8 text-gray-900' }, 'Information Sharing'),
          React.createElement('p', { className: 'text-gray-600 mb-4' }, 'We do not sell, trade, or rent your personal information to third parties. We may share information only with trusted service providers who perform services on our behalf.'),
          React.createElement('h2', { className: 'text-2xl font-bold mb-4 mt-8 text-gray-900' }, 'Your Rights'),
          React.createElement('p', { className: 'text-gray-600 mb-4' }, 'You have the right to access, rectify, or delete your personal information. Contact us at contact@etsteamcarpetcleaning.com to exercise these rights.'),
          React.createElement('h2', { className: 'text-2xl font-bold mb-4 mt-8 text-gray-900' }, 'Contact Us'),
          React.createElement('p', { className: 'text-gray-600' }, 'For privacy concerns, contact us at contact@etsteamcarpetcleaning.com or call (805) 704-2301.')
        )
      )
    )
  );

  return renderToStaticMarkup(content);
}

// Generate pre-rendered pages
console.log('Starting pre-rendering...\n');

// Process each route
routes.forEach((route) => {
  console.log(`Processing: ${route.path}`);

  let html = baseTemplate;

  // Update meta tags
  html = updateMetaTags(html, route);

  // Generate SSR content
  const renderedContent = generateSSRContent(route.path);

  if (renderedContent) {
    // Inject SSR content into #root div
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${renderedContent}</div>`
    );
    console.log(`  ✓ SSR content injected (${renderedContent.length} bytes)`);
  } else {
    console.log(`  ⚠ Using client-side rendering fallback`);
  }

  // Write the file
  const outputPath = path.join(distDir, route.file);
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`  ✓ Generated: ${route.file}\n`);
});

// Generate location-specific pages for local SEO
console.log('Generating service area pages...\n');

serviceAreas.forEach((area) => {
  const slug = area.toLowerCase().replace(/\s+/g, '-');
  const route = {
    path: `/service-area/${slug}`,
    file: `service-area-${slug}.html`,
    title: `Carpet Cleaning in ${area}, CA | E.T Carpet Cleaning`,
    description: `Professional carpet cleaning services in ${area}, CA. Steam cleaning, upholstery, tile & grout, pet stain removal. Call (805) 704-2301.`,
    keywords: `carpet cleaning ${area}, steam cleaning ${area}, professional cleaners ${area}`,
    ogImage: '/og-service-area.jpg'
  };

  let html = baseTemplate;
  html = updateMetaTags(html, route);

  // Write the file
  const outputPath = path.join(distDir, route.file);
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`✓ Generated: ${route.file} (${route.path})`);
});

console.log('\n✅ Pre-rendering complete!');
console.log(`📁 Generated ${routes.length + serviceAreas.length} HTML files in /dist`);
