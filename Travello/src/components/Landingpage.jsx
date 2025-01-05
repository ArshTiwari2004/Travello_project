import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaTrophy, FaUserAlt, FaPlane, FaMap, FaStar, FaUsers, FaCompass, FaMedal, FaCoins, FaGlobe } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { AuroraBackground } from "./ui/aurora-background";

const LandingPage = () => {
  return (
    <div className="min-h-screen " id="home">
      <AuroraBackground >
      {/* Header */}
      <header className="fixed top-6 w-full backdrop-blur-md  z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="group">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent font-lobster group-hover:scale-105 transition-transform duration-300">
                Travello
              </h1>
            </Link>

            <nav className="flex items-center space-x-8">
              {['Home', 'About Us', 'Reviews', 'Latest Adventures'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative text-gray-600 hover:text-blue-500 transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
              
              <div className="flex items-center space-x-4">
                <Link
                  to="/signin"
                  className="px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-24 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 bg-clip-text text-transparent">
              Discover the World's Hidden Gems
            </h2>

            <div className="text-3xl text-gray-700 h-20">
              <Typewriter
                options={{
                  strings: [
                    "Travel with Travello",
                    "Your journey begins here",
                    "Experience unique adventures",
                    "Create unforgettable memories",
                    "Discover hidden gems",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>

            <Link
              to="/signup"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              Let's Explore!
            </Link>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-12">
              {[
                { icon: FaMap, text: "100+ Locations" },
                { icon: FaPlane, text: "100+ Visits" },
                { icon: FaStar, text: "500+ Reviews" },
                { icon: FaUsers, text: "300+ Activities" }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center space-y-2 p-4  transition-all duration-300">
                  <Icon className="text-3xl text-blue-500" />
                  <span className="text-gray-600 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 rounded-2xl transform rotate-6 blur-3xl" />
            <img
              src="landing.svg"
              alt="Travel Destination"
              className="relative rounded-2xl  transform hover:scale-105 transition-transform duration-500 cursor-pointer"
            />
          </div>
        </div>

       
      </div>
    </AuroraBackground>
    </div>
  );
};

export default LandingPage;