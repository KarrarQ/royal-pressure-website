import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Royal Pressure LLC</h3>
            <p className="text-gray-400 mb-4">
              Professional pressure washing services for residential and commercial properties throughout the Denver Metro area - serving Denver, Thornton, Lakewood, Golden, Fort Collins and surrounding communities.
            </p>
            <div className="space-y-2">
              <a href="tel:9718656329" className="flex items-center text-gray-300 hover:text-white transition">
                <FaPhone className="mr-2" />
                (971) 865-6329
              </a>
              <a href="mailto:Royalpressurellc25@gmail.com" className="flex items-center text-gray-300 hover:text-white transition">
                <FaEnvelope className="mr-2" />
                Royalpressurellc25@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-white transition">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Car Wash</li>
              <li>Truck Wash</li>
              <li>Fleet Services</li>
              <li>Commercial</li>
              <li>Residential</li>
              <li>Storefronts</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Royal Pressure LLC. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://yelp.to/4aTakgEV1p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Yelp"
            >
              <FaYelp className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
