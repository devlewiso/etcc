import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How often should I clean my carpets?",
      answer: "The frequency depends on your specific situation:\n\n" +
        "• Regular households (no pets, shoes off): Every 12-18 months\n" +
        "• Families with children: Every 3-6 months\n" +
        "• Pet owners: Every 3-4 months\n" +
        "• Allergy sufferers: As needed or every 3 months\n" +
        "• High-traffic commercial areas: Every 2-3 months\n\n" +
        "Regular cleaning helps prevent permanent traffic marks and fiber breakdown. The more frequently you clean, the better maintained your carpets will be."
    },
    {
      question: "What's included in your steam carpet cleaning service?",
      answer: "Our professional steam cleaning service includes:\n\n" +
        "• Pre-inspection of your carpets\n" +
        "• Pre-treatment of heavy traffic areas and spots\n" +
        "• Hot water extraction with temperatures up to 260°F\n" +
        "• Eco-friendly cleaning solutions\n" +
        "• Post-cleaning carpet grooming\n" +
        "• Final inspection\n\n" +
        "We use state-of-the-art equipment that removes 99% of dirt, bacteria, and allergens."
    },
    {
      question: "How long will it take for my carpets to dry?",
      answer: "Drying time typically ranges from 6-24 hours, depending on:\n\n" +
        "• Carpet type and density\n" +
        "• Room ventilation\n" +
        "• Humidity levels\n" +
        "• Air circulation\n\n" +
        "To speed up drying, we recommend:\n" +
        "• Opening windows\n" +
        "• Using ceiling fans\n" +
        "• Running air conditioning or heating\n" +
        "• Using our optional fan rental service"
    },
    {
      question: "Do you offer commercial cleaning services?",
      answer: "Yes, we provide comprehensive commercial cleaning services including:\n\n" +
        "• Regular maintenance programs\n" +
        "• After-hours service\n" +
        "• Weekend appointments\n" +
        "• Emergency cleaning\n" +
        "• Custom cleaning schedules\n\n" +
        "We work with offices, retail spaces, restaurants, and other commercial properties in San Luis Obispo and surrounding areas."
    },
    {
      question: "How do you handle pet stains and odors?",
      answer: "Our pet stain and odor removal process includes:\n\n" +
        "• Deep inspection with UV lights to locate all spots\n" +
        "• Specialized enzyme-based treatments\n" +
        "• Deep cleaning to remove stains\n" +
        "• Deodorization treatment\n" +
        "• Sanitization\n\n" +
        "We recommend quarterly cleaning for homes with pets to maintain optimal carpet condition."
    },
    {
      question: "What areas do you service?",
      answer: "We proudly serve the following areas in San Luis Obispo County:\n\n" +
        "• San Luis Obispo\n" +
        "• Pismo Beach\n" +
        "• Arroyo Grande\n" +
        "• Morro Bay\n" +
        "• Los Osos\n" +
        "• Atascadero\n" +
        "• Paso Robles\n\n" +
        "Contact us to confirm service availability in your specific location."
    },
    {
      question: "What's your pricing structure?",
      answer: "Our pricing is based on several factors:\n\n" +
        "• Square footage of the area to be cleaned\n" +
        "• Type of service required\n" +
        "• Condition of the carpets\n" +
        "• Additional services needed (stain removal, deodorization)\n\n" +
        "Contact us for a free quote - we offer competitive rates and occasional seasonal specials."
    },
    {
      question: "Do you move furniture during cleaning?",
      answer: "For safety and liability reasons:\n\n" +
        "• We clean around large furniture pieces\n" +
        "• We recommend moving small items before we arrive\n" +
        "• We don't move heavy furniture (dressers, beds, electronics)\n" +
        "• We can clean under furniture if there's adequate clearance\n\n" +
        "Our cleaning solutions are safe for furniture and won't damage wood or fabrics."
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our carpet cleaning services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="prose prose-blue max-w-none">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-600 whitespace-pre-line">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+18057042301"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Call Us
            </a>
            <a
              href="mailto:contact@etsteamcarpetcleaning.com"
              className="bg-gray-100 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}