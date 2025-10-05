import { FaUserTie, FaHandshake, FaStar, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Owner Info */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Owner-Operated Since 2025
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Meet the Owner
            </h2>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              McKinnley Alvarez
            </h3>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                McKinnley Alvarez founded <span className="font-semibold text-blue-600">Royal Pressure LLC</span> with a simple mission: deliver exceptional cleaning services with personal attention to detail that only an owner operated business can provide.
              </p>
              <p>
                As the owner and lead operator, McKinnley personally oversees every job from start to finish. This hands on approach ensures your property receives the detailed, professional cleaning it deserves - no shortcuts, no missed spots, just quality work every time.
              </p>
              <p>
                When you choose Royal Pressure, you're not just hiring a service - you're working directly with someone who takes pride in every wash and stands behind every job with a personal guarantee.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100">
                <div className="flex items-center justify-center text-blue-600 text-3xl mb-2">
                  <FaStar />
                </div>
                <p className="text-center font-bold text-gray-900">5-Star</p>
                <p className="text-center text-sm text-gray-600">Service Quality</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md border border-blue-100">
                <div className="flex items-center justify-center text-blue-600 text-3xl mb-2">
                  <FaShieldAlt />
                </div>
                <p className="text-center font-bold text-gray-900">100%</p>
                <p className="text-center text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Side - Values/Benefits */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Owner-Operated Advantage
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                  <FaUserTie className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Direct Communication
                  </h4>
                  <p className="text-gray-600">
                    Speak directly with McKinnley - no middlemen, no confusion. Your questions get answered by the person doing the work.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                  <FaHandshake className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Personal Accountability
                  </h4>
                  <p className="text-gray-600">
                    McKinnley's reputation is on the line with every job. That means exceptional service and attention to detail, every single time.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                  <FaStar className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Quality Guaranteed
                  </h4>
                  <p className="text-gray-600">
                    With an owner who cares about every detail, you get consistently superior results. No job is complete until you're satisfied.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-700 mb-4 font-medium">
                Ready to experience the difference?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:9718656329"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  Call McKinnley
                </a>
                <a
                  href="#contact"
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
