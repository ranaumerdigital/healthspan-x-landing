import React from 'react';
import { Radio, Zap, Beaker, Users, Camera, Network } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Radio,
      title: "Live Podcast Recording",
      description: "Exclusive live recording of the Healthspan-X Podcast with expert panel discussions"
    },
    {
      icon: Zap,
      title: "Wellness Tech Demos",
      description: "Hands-on demonstrations of cutting-edge biofeedback, diagnostics, and wearable technology"
    },
    {
      icon: Beaker,
      title: "Nootropic Bar",
      description: "Curated selection of functional drinks and cognitive enhancement supplements"
    },
    {
      icon: Users,
      title: "Exclusive Networking",
      description: "Connect with 40 hand-selected guests from the longevity and biotech community"
    },
    {
      icon: Camera,
      title: "Professional Media",
      description: "High-quality video and photography documentation of the event"
    },
    {
      icon: Network,
      title: "Influencer Mixer",
      description: "Network with media personalities and health-tech influencers"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An immersive experience combining cutting-edge science, technology, and networking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;