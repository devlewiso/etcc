import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Rocket, Phone } from 'lucide-react';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center">
                <Rocket className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">E.T Carpet Cleaning</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
                <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
                <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
                <a
                  href="tel:+18057042301"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (805) 704-2301
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {/* WhatsApp Widget */}
        <WhatsAppWidget />

        <Footer />
      </div>
    </Router>
  );
}

export default App;