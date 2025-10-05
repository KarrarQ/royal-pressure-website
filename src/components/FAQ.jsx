import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does pressure washing cost?',
      answer: 'Pricing varies based on the size of the job and type of service. Most residential driveways range from $100-$300, house washing $200-$500, and commercial projects are quoted individually. We offer free estimates with no obligation!',
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes! We provide completely free, no-obligation quotes for all services. Just fill out our contact form or call (971) 865-6329 and we\'ll schedule a time to assess your property and provide a detailed estimate.',
    },
    {
      question: 'Are your cleaning products safe?',
      answer: 'Absolutely! We use eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, plants, and the environment. Our products are tough on dirt but gentle on surfaces.',
    },
    {
      question: 'How long does a typical pressure washing job take?',
      answer: 'Most residential jobs take 2-4 hours depending on the size and scope. A standard driveway might take 1-2 hours, while a full house wash could take 3-4 hours. Commercial projects vary - we\'ll provide a timeline with your quote.',
    },
    {
      question: 'Do I need to be home during the service?',
      answer: 'Not necessarily! As long as we have access to water and the areas to be cleaned, you don\'t need to be present. Many of our customers prefer to schedule service while they\'re at work. We\'ll send before and after photos when complete.',
    },
    {
      question: 'What areas do you service?',
      answer: 'We serve the entire Denver Metro area including Denver, Thornton, Lakewood, Golden, Fort Collins, Aurora, Arvada, Westminster, Littleton, Englewood, Broomfield, and surrounding communities. If you\'re unsure if we cover your area, just give us a call!',
    },
    {
      question: 'Can pressure washing damage my property?',
      answer: 'When done correctly by professionals, no! We use the appropriate pressure settings and techniques for each surface. Our experienced team knows how to clean effectively without causing damage to siding, wood, concrete, or other materials.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards (Visa, Mastercard, American Express, Discover). Payment is due upon completion of the service. We also offer fleet service accounts for businesses.',
    },
    {
      question: 'Do you offer recurring service plans?',
      answer: 'Yes! We have monthly, quarterly, and annual maintenance plans available for residential and commercial properties. Regular cleaning saves money long-term and keeps your property looking its best. Ask about our recurring service discounts!',
    },
    {
      question: 'What if I\'m not satisfied with the results?',
      answer: 'Your satisfaction is our top priority! We offer a 100% satisfaction guarantee. If you\'re not completely happy with our work, let us know immediately and we\'ll make it right at no additional charge. We don\'t leave until you\'re thrilled with the results.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <span className="flex-shrink-0 text-blue-600">
                  {openIndex === index ? (
                    <FaChevronUp className="text-xl" />
                  ) : (
                    <FaChevronDown className="text-xl" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Give us a call or send us a message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9718656329"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Call (971) 865-6329
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg border-2 border-blue-600 transition duration-300 transform hover:scale-105"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
