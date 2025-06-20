import React from 'react';
import { Calendar, MapPin, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/20 via-transparent to-teal-800/20"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-teal-400 mr-3" />
            <span className="text-teal-400 font-semibold text-lg">Healthspan-X Lounge</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            San Diego
            <span className="block bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Launch Event
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Where longevity science meets culture
          </p>
          
          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-teal-400" />
              <span className="text-white font-medium">July 17, 2025</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span className="text-white font-medium">AMP30, North Park</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="w-6 h-6 text-teal-400" />
              <span className="text-white font-medium">40 Selected Guests</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScObpZKForY5y682pFNhvOJNmkZfe0gIR7AcKTp20UnnD0JkA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            Become a Sponsor
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpItemVCynknuvK7gG3mDbDMFmcJ8UvYrSGwBMq2NLZqUI1g/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
          >
            Attend the Lounge
          </a>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;