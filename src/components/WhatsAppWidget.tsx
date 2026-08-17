import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

/**
 * WhatsApp Widget Component
 * Allows users to select a service and opens WhatsApp with a pre-filled message
 */

interface Service {
  id: string;
  name: string;
  icon: string;
}

const services: Service[] = [
  { id: 'steam-carpet', name: 'Steam Carpet Cleaning', icon: '🧹' },
  { id: 'upholstery', name: 'Upholstery Cleaning', icon: '🛋️' },
  { id: 'tile-grout', name: 'Tile & Grout Cleaning', icon: '🏠' },
  { id: 'area-rug', name: 'Area Rug Cleaning', icon: '🧶' },
  { id: 'pet-stain', name: 'Pet Stain Removal', icon: '🐕' },
  { id: 'commercial', name: 'Commercial Cleaning', icon: '🏢' },
  { id: 'mattress', name: 'Mattress Cleaning', icon: '🛏️' },
  { id: 'floor-care', name: 'Floor Care', icon: '🏠' },
  { id: 'protection', name: 'Protection Services', icon: '🛡️' },
  { id: 'residential', name: 'Residential Services', icon: '🏡' },
  { id: 'fan-rental', name: 'Fan Rental', icon: '💨' },
  { id: 'flea-treatment', name: 'Flea Treatment', icon: '🐛' },
  { id: 'other', name: 'Other / General Inquiry', icon: '💬' },
];

// WhatsApp business number (805) 704-2301
const WHATSAPP_NUMBER = '18057042301';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const handleOpenWhatsApp = () => {
    if (!selectedService) return;

    // Build the pre-filled message
    const message = `Hi! I'm interested in scheduling a cleaning service:%0A%0A` +
      `🔹 *Service:* ${selectedService.name}%0A` +
      `🔹 *Name:* ${customerName || 'Not specified'}%0A` +
      `🔹 *Address:* ${customerAddress || 'Not specified'}%0A%0A` +
      `Could you please provide more information and a quote?`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Reset and close
    setSelectedService(null);
    setCustomerName('');
    setCustomerAddress('');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* WhatsApp Dialog */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Chat on WhatsApp</h3>
                <p className="text-green-100 text-sm">
                  Select a service and we'll assist you right away
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Service Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🔹 What service do you need?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-3 rounded-lg border-2 transition text-left ${
                      selectedService?.id === service.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <span className="text-xl">{service.icon}</span>
                    <p className="text-xs font-medium text-gray-700 mt-1 truncate">
                      {service.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="E.g: John Smith"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address (optional)
                </label>
                <input
                  type="text"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="E.g: 123 Main St, San Luis Obispo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Footer with Send Button */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handleOpenWhatsApp}
              disabled={!selectedService}
              className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                selectedService
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="h-5 w-5" />
              {selectedService ? 'Open WhatsApp' : 'Select a service'}
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              📞 (805) 704-2301
            </p>
          </div>
        </div>
      )}
    </>
  );
}
