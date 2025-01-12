import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingNumber, setBookingNumber] = useState('');

  const serviceTypes = [
    'Carpet Cleaning',
    'Upholstery Cleaning',
    'Tile & Grout Cleaning',
    'Area Rug Cleaning',
    'Pet Stain Removal',
    'Commercial Cleaning'
  ];

  const timeSlots = [
'06:00',
 '06:30',
 '07:00',
 '07:30',
 '08:00',
 '08:30',
 '09:00',
 '09:30',
 '10:00',
 '10:30',
 '11:00',
 '11:30',
 '12:00',
 '12:30',
 '13:00',
 '13:30',
 '14:00',
 '14:30',
 '15:00',
 '15:30',
 '16:00',
 '16:30',
 '17:00',
 '17:30',
 '18:00',
 '18:30',
 '19:00',
 '19:30',
 '20:00',
 '20:30',
 '21:00',
 '21:30',
 '22:00'
  ];

  const generateBookingNumber = () => {
    return 'BK-' + Math.floor(Math.random() * 1000000); // Example: BK-123456
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate booking number
    const number = generateBookingNumber();
    setBookingNumber(number);

    // Prepare the booking data
    const bookingData = {
      serviceType,
      selectedDate,
      selectedTime,
      contactInfo,
      bookingNumber: number,
    };

    try {
      // Send data to the webhook
      const response = await fetch('https://minder.v-pn.online/webhook/ddca06cb-0209-4cce-be4b-79eeeb8964b7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking data to webhook.');
      }

      // Show confirmation after a brief delay
      setTimeout(() => {
        setBookingConfirmed(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      console.error('Error sending booking:', error);
      setIsSubmitting(false);
    }
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-blue-600 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Request Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing E.T Carpet Cleaning. We'll contact you shortly to confirm your appointment.
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">Service: {serviceType}</p>
              <p className="text-gray-600">
                {selectedDate} at {selectedTime}
              </p>
              <p className="font-medium text-gray-900">Booking Number: {bookingNumber}</p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Your Service</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            >
              <option value="">Select a service</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="">Select a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={contactInfo.address}
                  onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={contactInfo.notes}
                onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-blue-600 text-white rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}
