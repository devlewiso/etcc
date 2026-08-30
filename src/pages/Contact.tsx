import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronDown, ChevronUp, Star, Zap, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceArea from '../components/ServiceArea';

const backgroundImages = [
  'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80'
];

// WhatsApp business number (805) 704-2301
const WHATSAPP_NUMBER = '18057042301';

export default function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build the WhatsApp message
    const message = `*New Inquiry from Website*%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}%0A` +
      `📍 *Address:* ${formData.address || 'Not provided'}%0A` +
      `🧹 *Service:* ${formData.serviceType || 'Not selected'}%0A%0A` +
      `💬 *Message:*%0A${formData.message}%0A%0A` +
      `Please contact me back with a quote. Thank you!`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      serviceType: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const quickFaqs = [
    {
      question: "How quickly can you come?",
      answer: "We typically can schedule appointments within 24-48 hours. Same-day service may be available for emergency situations."
    },
    {
      question: "Do I need to be home during cleaning?",
      answer: "No, you don't need to be home as long as we have access to the property. Many customers leave a key or use a lockbox."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, check, Venmo, and Zelle. Payment is due upon completion of service."
    },
    {
      question: "Are your cleaning products safe for pets?",
      answer: "Yes! We use eco-friendly, non-toxic cleaning solutions that are safe for pets and children."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact E.T Carpet Cleaning",
    "description": "Get in touch with E.T Carpet Cleaning for professional carpet cleaning services in San Luis Obispo. Call (805) 704-2301 or send us a message.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "E.T Carpet Cleaning",
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-805-704-2301",
        "contactType": "customer service",
        "areaServed": "US-CA",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <div className="py-24">
      <SEO
        title="Contact Us | E.T Carpet Cleaning San Luis Obispo"
        description="Get in touch with E.T Carpet Cleaning for professional carpet cleaning services in San Luis Obispo. Call (805) 704-2301, chat on WhatsApp, or send us a message."
        canonical="/contact"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

      {/* Hero Section */}
      <div className="relative h-96 mb-16 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            Have questions? We're here to help. Reach out through any of these channels.
          </p>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Need Service Today?</h2>
                <p className="text-blue-100">Call us now for same-day appointments</p>
              </div>
            </div>
            <a
              href="tel:+18057042301"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              (805) 704-2301
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+18057042301" className="text-blue-600 hover:underline">
                      (805) 704-2301
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:contact@etsteamcarpetcleaning.com" className="text-purple-600 hover:underline">
                      contact@etsteamcarpetcleaning.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">San Luis Obispo County</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Experienced Local Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">100% Satisfaction Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Same-Day Service Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                  Or click the WhatsApp button for instant responses.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(805) 704-2301"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    >
                      <option value="">Select a service</option>
                      <option value="Steam Carpet Cleaning">Steam Carpet Cleaning</option>
                      <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                      <option value="Tile & Grout Cleaning">Tile & Grout Cleaning</option>
                      <option value="Area Rug Cleaning">Area Rug Cleaning</option>
                      <option value="Pet Stain Removal">Pet Stain Removal</option>
                      <option value="Commercial Cleaning">Commercial Cleaning</option>
                      <option value="Mattress Cleaning">Mattress Cleaning</option>
                      <option value="Floor Care">Floor Care</option>
                      <option value="Protection Services">Protection Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="123 Main St, San Luis Obispo, CA 93401"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your cleaning needs, square footage, specific concerns..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white font-semibold p-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By sending, you agree to our terms of service and privacy policy.
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Quick FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Quick Questions?
          </h2>
          <div className="space-y-4">
            {quickFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="text-base font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
              View all FAQs →
            </Link>
          </div>
        </div>
      </div>

      {/* Service Area Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Areas We Serve
          </h2>
          <ServiceArea />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Your Carpets Clean?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Book your appointment today and experience the E.T difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition"
            >
              Book Online Now
            </Link>
            <a
              href="tel:+18057042301"
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition border-2 border-white/20"
            >
              Or Call (805) 704-2301
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
