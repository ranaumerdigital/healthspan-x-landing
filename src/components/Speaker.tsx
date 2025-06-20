import React from 'react';
import { BookOpen, Podcast } from 'lucide-react';

const Speaker = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keynote Speaker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from a leading voice in predictive medicine and healthcare innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-teal-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <img
                    src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/28213/webp_thumbnail_bio_pic_LC_manny_-_Emmanuel_Fombu.JPG.webp"
                    alt="Dr. Emmanuel Fombu"
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white/30"
                  />
                  <h3 className="text-2xl font-bold text-white">Dr. Emmanuel Fombu</h3>
                  <p className="text-white/80 mt-2">MD, MBA</p>
                </div>
              </div>

              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">About Dr. Fombu</h4>
                    <p className="text-gray-600">
                      Former Novartis executive and renowned author of "The Future of Healthcare" and "Predictive Medicine". 
                      Host of the Healthspan-X Podcast, bringing cutting-edge insights to the intersection of technology and longevity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-700">Published Author</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Podcast className="w-6 h-6 text-teal-600" />
                      <span className="text-gray-700">Podcast Host</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-800 font-medium italic">
                      "We're not just adding years — we're adding vibrant, optimized life to every year."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
