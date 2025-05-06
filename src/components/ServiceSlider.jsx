import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import aiImgService from "../assets/images/AIImplementationMobileWebApplications.png";
import digitalTransformationImgService from "../assets/images/DigitalTransformationOptimization.png";
import systemIntegrationImgService from "../assets/images/SystemIntegrationCustomization.png";
import tailoredSolutionsImgService from "../assets/images/TailoredSolutions&OtherServices.png";
import projectManagementImgService from "../assets/images/ProjectManagement.png";
import webImgServices from "../assets/images/WebDevelopment.png";

const ServiceSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      image: projectManagementImgService,
      titleKey: 'services.items.projectManagement.title',
      itemsKey: 'services.items.projectManagement.items',
    },
    {
      id: 2,
      image: aiImgService,
      titleKey: 'services.items.ai.title',
      itemsKey: 'services.items.ai.items',
    },
    {
      id: 3,
      image: systemIntegrationImgService,
      titleKey: 'services.items.integration.title',
      itemsKey: 'services.items.integration.items',
    },
    {
      id: 4,
      image: webImgServices,
      titleKey: 'services.items.webDev.title',
      itemsKey: 'services.items.webDev.items',
    },

    {
      id: 5,
      image: digitalTransformationImgService,
      titleKey: 'services.items.transformation.title',
      itemsKey: 'services.items.transformation.items',
    },
    {
      id: 6,
      image: tailoredSolutionsImgService,
      titleKey: 'services.items.custom.title',
      itemsKey: 'services.items.custom.items',
    },
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

          <div className="relative overflow-hidden">
            {/* Buttons
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            >
              ←
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
            >
              →
            </button>
            */}

            {/* Slide wrapper */}
            <div className="overflow-x-hidden">
              <div
                  className="flex transition-transform duration-500"
                  style={{
                    transform: `translateX(-${currentSlide * 80}%)`,
                  }}
              >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="min-w-[80%] mr-6 bg-white rounded-xl overflow-hidden flex"
                    >
                      {/* Left side */}
                      <div
                          className={`flex-1 p-6 text-white ${
                              index % 2 === 0 ? 'bg-black' : 'bg-[#757575]'
                          }`}
                      >
                        <h3 className="text-2xl font-bold uppercase mb-4">
                          {t(service.titleKey)}
                        </h3>
                        <ul className="space-y-3">
                          {t(service.itemsKey, { returnObjects: true }).map((item, i) => (
                              <li key={i} className="text-sm md:text-base">
                                {item}
                              </li>
                          ))}
                        </ul>
                        <button onClick={nextSlide} className="mt-6 text-2xl hover:text-primary transition-colors">
                          ➜
                        </button>
                      </div>

                      {/* Right side (icon or image) */}
                      <div className="flex-1 bg-white">
                        <img
                            src={service.image}
                            alt={t(service.titleKey)}
                            className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                  onClick={prevSlide}
                  className="p-2 rounded-s bg-gray-400 hover:bg-gray-300 transition-colors"
              >
                ←
              </button>

              {services.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                          currentSlide === index ? 'bg-green-400' : 'bg-gray-300'
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
