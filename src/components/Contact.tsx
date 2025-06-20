import React from 'react';
import { Mail, Globe, Instagram, Calendar, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of San Diego's premier longevity and health innovation event
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-medium">hello@healthspan-x.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Website</p>
                    <p className="text-white font-medium">www.Healthspan-X.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Social</p>
                    <p className="text-white font-medium">@HealthspanFuturist</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-teal-400" />
                  <span className="text-white">July 17, 2025</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span className="text-white">AMP30, North Park — San Diego</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-br from-purple-600/20 to-teal-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Ready to Get Involved?</h3>
            <p className="text-gray-300 mb-8">
              Whether you're interested in sponsoring, attending, or learning more about our mission, 
              we'd love to hear from you. Let's shape the future of human longevity together.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScObpZKForY5y682pFNhvOJNmkZfe0gIR7AcKTp20UnnD0JkA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Become a Sponsor
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpItemVCynknuvK7gG3mDbDMFmcJ8UvYrSGwBMq2NLZqUI1g/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                Request Invitation
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;