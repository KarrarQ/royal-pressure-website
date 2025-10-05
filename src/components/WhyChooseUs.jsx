import { FaLeaf, FaDollarSign, FaTruck, FaAward, FaShieldAlt, FaClock } from 'react-icons/fa';
import { reasons as reasonsData } from '../data/whyChooseUsData';

const WhyChooseUs = () => {
  // Map icon names to actual icon components
  const iconMap = {
    FaLeaf: <FaLeaf className="text-4xl" />,
    FaDollarSign: <FaDollarSign className="text-4xl" />,
    FaTruck: <FaTruck className="text-4xl" />,
    FaAward: <FaAward className="text-4xl" />,
    FaShieldAlt: <FaShieldAlt className="text-4xl" />,
    FaClock: <FaClock className="text-4xl" />,
  };

  const reasons = reasonsData.map(reason => ({
    ...reason,
    icon: iconMap[reason.icon]
  }));

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose Royal Pressure?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Denver's trusted pressure washing professionals - committed to delivering exceptional service
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4 text-blue-600">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across Denver who trust Royal Pressure for their washing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9718656329"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Call (971) 865-6329
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
