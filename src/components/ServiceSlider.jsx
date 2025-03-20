import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: "🗂️",
    title: "Project Management",
    items: [
      "Comprehensive planning and management of digital projects",
      "Team coordination and meeting deadlines",
      "Optimization of processes and workflows"
    ]
  },
  {
    id: 2,
    icon: "🤖",
    title: "AI Implementation in Mobile and Web Applications",
    items: [
      "Integration of Popular AI APIs (OpenAI, Google AI, AWS AI)",
      "Enhancing user experience through natural language processing, image recognition, and personalization"
    ]
  },
  {
    id: 3,
    icon: "💻",
    title: "Web Development",
    items: [
      "Frontend Development: JavaScript, Progressive Web Apps (PWA), WordPress Customization",
      "Backend Development: PHP Custom Code, Laravel, Python"
    ]
  },
  {
    id: 4,
    icon: "🔗",
    title: "System Integration & Customization",
    items: [
      "Platform integration",
      "Development of extensions and plugins",
      "Custom code for specific functionalities"
    ]
  },
  {
    id: 5,
    icon: "🚀",
    title: "Digital Transformation & Optimization",
    items: [
      "Process digitalization (Optimizing business processes)",
      "Website migration and upgrades",
      "Software testing (Ensuring quality and performance)"
    ]
  },
  {
    id: 6,
    icon: "💡",
    title: "Tailored Solutions & Other Services",
    items: [
      "Custom solutions tailored to the client's needs",
      "Implementation of specific tech stacks based on the project",
      "Additional services adapted to special projects"
    ]
  }
];

const ServiceSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            →
          </button>

          {/* Slides */}
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <div className="text-6xl mb-6">{services[currentSlide].icon}</div>
                  <h3 className="text-2xl font-bold mb-6">{services[currentSlide].title}</h3>
                  <ul className="space-y-4">
                    {services[currentSlide].items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider; 