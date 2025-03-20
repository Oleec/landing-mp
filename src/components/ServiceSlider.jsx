import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ServiceSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      icon: "🗂️",
      titleKey: "services.items.projectManagement.title",
      itemsKey: "services.items.projectManagement.items"
    },
    {
      id: 2,
      icon: "🤖",
      titleKey: "services.items.ai.title",
      itemsKey: "services.items.ai.items"
    },
    {
      id: 3,
      icon: "💻",
      titleKey: "services.items.webDev.title",
      itemsKey: "services.items.webDev.items"
    },
    {
      id: 4,
      icon: "🔗",
      titleKey: "services.items.integration.title",
      itemsKey: "services.items.integration.items"
    },
    {
      id: 5,
      icon: "🚀",
      titleKey: "services.items.transformation.title",
      itemsKey: "services.items.transformation.items"
    },
    {
      id: 6,
      icon: "💡",
      titleKey: "services.items.custom.title",
      itemsKey: "services.items.custom.items"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">{t('services.title')}</h2>
        
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
                  <h3 className="text-2xl font-bold mb-6">{t(services[currentSlide].titleKey)}</h3>
                  <ul className="space-y-4">
                    {t(services[currentSlide].itemsKey, { returnObjects: true }).map((item, index) => (
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