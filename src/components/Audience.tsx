import React from 'react';
import { Stethoscope, Brain, TrendingUp, Microscope } from 'lucide-react';

const Audience = () => {
  const audiences = [
    {
      icon: Stethoscope,
      title: "Longevity Clinic Founders",
      description: "Leaders in preventive and regenerative medicine"
    },
    {
      icon: Brain,
      title: "Biohackers & Creators",
      description: "Innovative minds pushing the boundaries of human optimization"
    },
    {
      icon: TrendingUp,
      title: "Investors & Executives",
      description: "Digital health investors and healthcare technology executives"
    },
    {
      icon: Microscope,
      title: "Functional Medicine Leaders",
      description: "Practitioners and researchers in personalized healthcare"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who's in the Room
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with the most influential minds in longevity science and health technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-purple-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
                <p className="text-gray-300 leading-relaxed">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;