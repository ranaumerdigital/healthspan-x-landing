import React from 'react';
import { Target, Lightbulb, Users, Sparkles } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-teal-400 mr-3" />
            <span className="text-teal-400 font-semibold text-lg uppercase tracking-wide">Our Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We're not just adding years —
            <span className="block bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              we're adding vibrant life to years
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unite biotech, wellness, and culture to drive human potential beyond current limitations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Target className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Precision Focus</h3>
              <p className="text-gray-300">Targeting the intersection of longevity science and practical application</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Lightbulb className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">Bringing together cutting-edge research and breakthrough technologies</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-300">Building a network of leaders committed to extending human healthspan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;