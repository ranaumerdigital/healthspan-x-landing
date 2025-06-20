import React from 'react';
import { BookOpen, Podcast, Mic, Globe } from 'lucide-react';

const Speaker = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet The Healthspan Futurist™
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Emmanuel Fombu is reimagining what it means to live longer — and live better. Through science, AI, and culture, he’s shaping the future of health and longevity.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-purple-700 to-teal-600 p-8 flex items-center justify-center">
              <div className="text-center">
                <img
                  src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/28213/webp_thumbnail_bio_pic_LC_manny_-_Emmanuel_Fombu.JPG.webp"
                  alt="Dr. Emmanuel Fombu"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-white/30"
                />
                <h3 className="text-2xl font-bold text-white">Dr. Emmanuel Fombu</h3>
                <p className="text-white/80 mt-1">MD, MBA</p>
                <p className="text-white/70 text-sm">Founder | Physician | Futurist</p>
              </div>
            </div>

            <div className="md:w-2/3 p-8 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">About Dr. Fombu</h4>
                <p className="text-gray-700">
                  Dr. Emmanuel Fombu is a globally recognized physician, futurist, and longevity strategist. He is the founder of <strong>Healthspan-X</strong> and host of both the <strong>Healthspan-X</strong> and <strong>Bite the Orange</strong> podcasts — leading platforms exploring the future of aging, performance, and wellness.
                </p>
                <p className="text-gray-700 mt-2">
                  With over 20 years of experience across medicine, biotech, AI, and venture capital, Dr. Fombu advises global health systems and startups shaping the next generation of care. He’s spoken at top institutions and appeared on international platforms to share a vision of thriving healthspans.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Bestselling Author</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Podcast className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700">Podcast Host</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="w-6 h-6 text-pink-500" />
                  <span className="text-gray-700">Global Keynote Speaker</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">International Advisor</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-800 italic font-medium">
                  "We’re not just adding years to life — we’re adding vibrant life to years."
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mt-6 mb-2">Author of:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><em>The Healthspan Revolution</em> (Coming Fall 2025)</li>
                  <li><em>The Future of Healthcare: Human and Machine Partnering for Better Outcomes</em></li>
                  <li><em>Predictive Medicine</em></li>
                </ul>
              </div>

              <div className="pt-6">
                <h5 className="font-semibold text-gray-900 mb-2">As Seen In / Collaborated With</h5>
                <div className="overflow-x-auto whitespace-nowrap">
                  <div className="flex gap-6 animate-scroll">
                    <img src="https://pentagram-production.imgix.net/f8380a94-0557-49a5-b897-60f49ac77b68/mb_mitmedialab_03.jpg" alt="MIT Media Lab" className="h-10" />
                    <img src="https://logotyp.us/file/harvard-university.svg" alt="Harvard" className="h-10" />
                    <img src="https://www.vhv.rs/dpng/f/168-1688610_stanford-university-logo-png.png" alt="Stanford" className="h-10" />
                    <img src="https://1000logos.net/wp-content/uploads/2022/06/Cornell-University-Logo.png" alt="Cornell" className="h-10" />
                    <img src="https://cdn.prod.website-files.com/5fb35e309585eefa0e9fb83f/5fd7f7ebd033dcbb2b0c8a76_tex-x-logo-p-500.png" alt="TEDx" className="h-10" />
                    <img src="https://www.csl.com/-/media/shared/vita-2023/prixgalienlogo-16x9.png" alt="Prix Galien" className="h-10" />
                    <img src="https://tukuz.com/wp-content/uploads/2019/11/arab-health-by-informa-markets-logo-vector.png" alt="Arab Health" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Smart_Africa_Secretariat_logo.png" alt="Smart Africa" className="h-10" />
                    <img src="https://www.logo.wine/a/logo/MSNBC/MSNBC-Logo.wine.svg" alt="MSNBC" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg" alt="FOX" className="h-10" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Logo_Univision_2019.svg" alt="Univision" className="h-10" />
                    <img src="https://images.seeklogo.com/logo-png/6/1/hot-97-nyc-logo-png_seeklogo-68043.png" alt="HOT 97 FM" className="h-10" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: inline-flex;
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Speaker;
