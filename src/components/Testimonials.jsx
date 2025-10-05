import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'Fleet Manager',
      company: 'Denver Delivery Services',
      rating: 5,
      text: 'Royal Pressure has been washing our delivery fleet for 6 months now. They\'re always on time, do great work, and our trucks look brand new every time. Highly recommend for any business with vehicles.',
      image: '👨‍💼',
    },
    {
      name: 'Sarah Thompson',
      role: 'Homeowner',
      company: 'Thornton, CO',
      rating: 5,
      text: 'I had my house and driveway done last month and WOW. The difference is incredible. They were professional, affordable, and cleaned up everything perfectly. My neighbors have been asking who did the work.',
      image: '👩',
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      company: 'Chen\'s Auto Sales',
      rating: 5,
      text: 'We use Royal Pressure weekly for our dealership lot. The cars always look showroom ready and it\'s made a real difference in our sales. Great service and fair pricing. These guys know what they\'re doing.',
      image: '👨',
    },
    {
      name: 'Jennifer Williams',
      role: 'Property Manager',
      company: 'Lakewood Apartments',
      rating: 5,
      text: 'Managing a 50-unit complex means keeping the exterior clean is crucial. Royal Pressure does our buildings, walkways, and parking areas monthly. Reliable, thorough, and our residents love how clean everything looks',
      image: '👩‍💼',
    },
    {
      name: 'Robert Martinez',
      role: 'Restaurant Owner',
      company: 'The Denver Grill',
      rating: 5,
      text: 'First impressions matter in the restaurant business. Royal Pressure keeps our storefront, patio, and parking area spotless. They work around our schedule and never disrupt our operations. Couldn\'t be happier',
      image: '👨‍🍳',
    },
    {
      name: 'Lisa Anderson',
      role: 'Homeowner',
      company: 'Golden, CO',
      rating: 5,
      text: 'After years of buildup, my deck and fence looked terrible. Royal Pressure transformed them in just a few hours! The team was friendly, respectful of my property, and the results exceeded my expectations. Worth every penny fr',
      image: '👩‍🦰',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <div className="mt-6">
            <a
              href="https://yelp.to/4aTakgEV1p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              View Our Yelp Reviews ⭐⭐⭐⭐⭐
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4 opacity-50" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Love Our Service?
          </h3>
          <p className="text-gray-600 mb-6">
            Help others discover Royal Pressure by leaving us a review
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://yelp.to/4aTakgEV1p"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review on Yelp
            </a>
            <a
              href="https://www.google.com/search?q=royal+pressure+llc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Review on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
