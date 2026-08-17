import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy for E.T Carpet Cleaning services in San Luis Obispo, CA",
    "isPartOf": {
      "@type": "WebSite",
      "name": "E.T Carpet Cleaning",
      "url": "https://etsteamcarpetcleaning.com"
    }
  };

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for E.T Carpet Cleaning services in San Luis Obispo, CA. Learn how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
        image="https://etsteamcarpetcleaning.com/og-image.jpg"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />

      <div className="pt-8">
        {/* Header */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xl text-center text-gray-600">
              Last updated: August 16, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-gray-600 leading-relaxed mb-6">
                  At E.T Carpet Cleaning, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our carpet cleaning services in San Luis Obispo County, California.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Personal Information
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Request a quote or schedule a service</li>
                  <li>Contact us by phone, email, or through our website</li>
                  <li>Fill out a form on our website</li>
                  <li>Subscribe to our newsletter (if applicable)</li>
                </ul>

                <p className="text-gray-600 leading-relaxed mb-4">
                  The personal information we collect may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Name:</strong> To identify you and address you properly</li>
                  <li><strong>Email address:</strong> To send confirmations, quotes, and respond to inquiries</li>
                  <li><strong>Phone number:</strong> To contact you regarding your service appointment</li>
                  <li><strong>Service address:</strong> To provide on-site carpet cleaning services</li>
                  <li><strong>Billing information:</strong> To process payments for services rendered</li>
                  <li><strong>Details about your cleaning needs:</strong> To provide accurate quotes and service</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Information Automatically Collected
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Provide and manage our carpet cleaning services</li>
                  <li>Schedule and confirm appointments</li>
                  <li>Respond to your inquiries and customer service requests</li>
                  <li>Send you service reminders and follow-up communications</li>
                  <li>Process payments and send invoices</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and property</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Share Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>We do not sell, trade, or rent your personal information to third parties.</strong>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information in the following limited circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Service providers:</strong> We may share information with trusted third-party vendors who perform services on our behalf, such as payment processing, website hosting, or customer communications. These vendors are obligated to protect your information and may only use it for the specific purpose we contract them for.</li>
                  <li><strong>Legal requirements:</strong> We may disclose your information if required by law, such as in response to a subpoena, court order, or government investigation.</li>
                  <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of the transaction.</li>
                  <li><strong>With your consent:</strong> We may share your information with your explicit consent.</li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities on our website.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Cookies</strong> are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your browsing experience</li>
                  <li>Analyze website traffic and performance</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling cookies may limit your ability to use certain features of our website.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Privacy Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li><strong>Right to access:</strong> You may request a copy of the personal information we hold about you.</li>
                  <li><strong>Right to rectification:</strong> You may request that we correct inaccurate or incomplete information.</li>
                  <li><strong>Right to deletion:</strong> You may request that we delete your personal information, subject to certain legal exceptions.</li>
                  <li><strong>Right to restrict processing:</strong> You may request that we limit how we use your information.</li>
                  <li><strong>Right to data portability:</strong> You may request a copy of your information in a machine-readable format.</li>
                  <li><strong>Right to opt-out:</strong> You may opt-out of receiving marketing communications from us.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:contact@etsteamcarpetcleaning.com" className="text-blue-600 hover:underline">
                    contact@etsteamcarpetcleaning.com
                  </a>
                  {' '}or call us at{' '}
                  <a href="tel:+18057042301" className="text-blue-600 hover:underline">
                    (805) 704-2301
                  </a>.
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Data Security
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Data Retention
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Customer information is typically retained for active customers and for a reasonable period after your last service for follow-up and warranty purposes.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Children's Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete the information.
                </p>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last updated" date at the top of this policy.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </section>

              {/* Contact Us */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-2">
                    <strong>By email:</strong>{' '}
                    <a href="mailto:contact@etsteamcarpetcleaning.com" className="text-blue-600 hover:underline">
                      contact@etsteamcarpetcleaning.com
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>By phone:</strong>{' '}
                    <a href="tel:+18057042301" className="text-blue-600 hover:underline">
                      (805) 704-2301
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>By mail:</strong><br />
                    E.T Carpet Cleaning<br />
                    San Luis Obispo, CA 93401<br />
                    United States
                  </p>
                </div>
              </section>

              {/* California Residents */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Notice to California Residents
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>The right to know what personal information is collected, used, shared, or sold</li>
                  <li>The right to delete personal information held by businesses</li>
                  <li>The right to opt-out of the sale of personal information</li>
                  <li>The right to non-discrimination for exercising privacy rights</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As stated in this policy, E.T Carpet Cleaning does not sell personal information. To exercise your California privacy rights, please contact us using the information provided in the "Contact Us" section above.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
