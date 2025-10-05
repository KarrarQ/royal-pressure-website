import { FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <a href="#home" className="mb-8 inline-block cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Royal Pressure" 
              className="h-32 w-auto filter drop-shadow-2xl hover:scale-105 transition duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </a>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Denver's Professional
            <span className="block text-yellow-300 mt-2">Pressure Washing Service</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Expert exterior cleaning services for Denver Metro area - Thornton, Lakewood, Golden, Fort Collins & beyond
          </p>

          {/* Quick Services */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-white">
            {['Car Wash', 'Truck Wash', 'Fleet Services', 'Specialty Cleaning'].map((service) => (
              <div key={service} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaCheckCircle className="text-yellow-300 mr-2" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:9718656329"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <FaPhone />
              (971) 865-6329
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Free Quote
            </a>
          </div>

          {/* About the Owner */}
          <div className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-yellow-300 mb-3">Meet the Owner</h3>
            <p className="text-white text-lg leading-relaxed">
              <span className="font-semibold text-yellow-300">McKinnley Alvarez</span> founded Royal Pressure LLC with a commitment to quality and customer satisfaction. As an owner-operated business, McKinnley personally oversees every job to ensure your property receives the detailed, professional cleaning it deserves. When you choose Royal Pressure, you're working directly with someone who takes pride in every wash.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white">
            {[
              { title: 'Eco-Friendly', desc: 'Safe products' },
              { title: 'Mobile Service', desc: 'We come to you' },
              { title: 'Affordable', desc: 'Great prices' },
              { title: 'Reliable', desc: '100% satisfaction' },
            ].map((badge) => (
              <div key={badge.title} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-bold text-lg text-yellow-300">{badge.title}</h3>
                <p className="text-sm text-blue-100">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
