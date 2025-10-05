import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import ScrollToTop from './components/ScrollToTop';

// Animation wrapper component
const AnimatedSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <WhyChooseUs />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <Testimonials />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
      <FloatingCallButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
