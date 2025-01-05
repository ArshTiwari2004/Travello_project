import React from 'react';
import { MapPin, Mail, Phone, Clock, ChevronRight, Globe, Send } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter submission logic here
  };

  return (
    <footer className="bg-gradient-to-br from-cyan-950 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Travello
              </h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Embark on extraordinary journeys with us. Discover hidden gems and 
                create unforgettable memories across the globe.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">arshtiwari12345@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">+91 5555566666</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative space-y-3">
              <span className="border-b-2 border-cyan-400 pb-2 ">Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Destinations', 'Tours', 'Blog', 'Contact'].map((link) => (
                <li key={link} className="group flex items-center">
                  <ChevronRight className="h-4 w-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors ml-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="border-b-2 border-cyan-400 pb-2">Popular Destinations</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['Bali', 'Paris', 'Tokyo', 'New York', 'Venice', 'Sydney'].map((destination) => (
                <div key={destination} className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-cyan-400" />
                  <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                    {destination}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="border-b-2 border-cyan-400 pb-2">Newsletter</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for travel updates and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-cyan-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
            
            {/* Operating Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Operating Hours:</h4>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-cyan-900">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Travello. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;