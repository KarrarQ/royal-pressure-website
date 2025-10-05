import { FaCar, FaTruck, FaBuilding, FaStore, FaHome, FaWarehouse } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCar className="text-5xl text-blue-600" />,
      title: 'Car Wash',
      description: 'Professional exterior car washing that leaves your vehicle spotless and shining.',
      features: ['Hand wash option', 'Wheel cleaning', 'Spot-free rinse'],
    },
    {
      icon: <FaTruck className="text-5xl text-blue-600" />,
      title: 'Truck Wash',
      description: 'Heavy-duty cleaning for trucks of all sizes, removing dirt, grime, and road film.',
      features: ['Commercial trucks', 'Pickup trucks', 'Large vehicles'],
    },
    {
      icon: <FaWarehouse className="text-5xl text-blue-600" />,
      title: 'Fleet Services',
      description: 'Comprehensive fleet washing programs for businesses with multiple vehicles.',
      features: ['Scheduled service', 'Volume discounts', 'On-site available'],
    },
    {
      icon: <FaBuilding className="text-5xl text-blue-600" />,
      title: 'Commercial Properties',
      description: 'Building exteriors, parking lots, and commercial space cleaning.',
      features: ['Office buildings', 'Parking structures', 'Warehouses'],
    },
    {
      icon: <FaHome className="text-5xl text-blue-600" />,
      title: 'Residential',
      description: 'House washing, driveways, decks, and fences for homeowners.',
      features: ['House exteriors', 'Driveways', 'Patios & decks'],
    },
    {
      icon: <FaStore className="text-5xl text-blue-600" />,
      title: 'Storefronts',
      description: 'Keep your business looking professional with regular storefront cleaning.',
      features: ['Windows', 'Sidewalks', 'Entryways'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional pressure washing solutions for residential and commercial needs across the Denver Metro area
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Additional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              'Apartment Complexes',
              'Dealer Lots',
              'Gutter Cleaning',
              'Concrete Cleaning',
              'Deck Cleaning',
              'Fence Cleaning',
              'Window Cleaning',
              'Specialty Vehicles',
            ].map((service) => (
              <div key={service} className="bg-white/10 backdrop-blur-sm py-3 px-4 rounded-lg">
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Schedule Your Wash Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
