import React from 'react';
import { Check, Star, Crown, Gem } from 'lucide-react';

const SponsorshipAndVolunteer = () => {
  const tiers = [
    {
      name: "Core Sponsor",
      price: "$3,000",
      icon: Star,
      features: [
        "Logo on all event assets",
        "Verbal mention during event",
        "Professional video & photos",
        "Post-event lead access",
        "Social media promotion"
      ],
      popular: false
    },
    {
      name: "Activation Partner",
      price: "$5,000",
      icon: Crown,
      features: [
        "All Core Sponsor benefits",
        "Product demonstration booth",
        "Speaking opportunity",
        "Custom branded materials",
        "Premium networking access",
        "Newsletter feature"
      ],
      popular: true
    },
    {
      name: "Premier Sponsor",
      price: "$7,500+",
      icon: Gem,
      features: [
        "All Activation Partner benefits",
        "Custom media package",
        "Podcast feature segment",
        "Executive roundtable access",
        "Co-branded content creation",
        "VIP hospitality package"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sponsorship Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Sponsor? Align your brand with the future of human longevity. Reach decision-makers in healthtech, biohacking, wellness, digital medicine, diagnostics, nutrition, fitness, and venture capital — all in one exclusive room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative ${tier.popular ? 'scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`bg-white rounded-3xl shadow-xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${tier.popular ? 'border-purple-500' : 'border-gray-200 hover:border-purple-300'}`}>
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${tier.popular ? 'bg-gradient-to-r from-purple-600 to-teal-600' : 'bg-gradient-to-r from-gray-400 to-gray-600'}`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{tier.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScObpZKForY5y682pFNhvOJNmkZfe0gIR7AcKTp20UnnD0JkA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white hover:shadow-lg hover:scale-105' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All sponsors receive professional video/photography and post-event lead access (where permitted).
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Ready to discuss a custom package? Let's talk.
          </p>
        </div>

        {/* Enhanced Volunteer Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become a Volunteer
          </h2>
          <p className="text-xl mb-8">
            Join our amazing team of volunteers and help us organize this groundbreaking event. Whether you’re passionate about longevity, health tech, or simply want to contribute to a great cause, we’d love to have you on board!
          </p>

          <div className="space-y-4">
            <p className="text-lg">Volunteer Benefits:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Gain exclusive access to the event</li>
              <li>Network with industry leaders and innovators</li>
              <li>Get hands-on experience in event management</li>
              <li>Contribute to a cause that’s shaping the future of health</li>
            </ul>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRjx7uVfU4yy6FiWTBRKUDJGVuLt4yvPzPnvxgvjEFgnwrXA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-gradient-to-r from-teal-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Sign Up to Volunteer
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipAndVolunteer;
