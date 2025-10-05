import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && (
        <a
          href="tel:9718656329"
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition duration-300 transform hover:scale-110 flex items-center gap-2 group animate-pulse hover:animate-none"
          aria-label="Call Now"
        >
          <FaPhone className="text-2xl" />
          <span className="hidden group-hover:inline-block font-semibold pr-2 whitespace-nowrap">
            (971) 865-6329
          </span>
        </a>
      )}
    </>
  );
};

export default FloatingCallButton;
