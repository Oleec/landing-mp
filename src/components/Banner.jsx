import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-mentadark text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner-bg.svg"
          alt="Technology Banner"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Floating Logo */}
      <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-4">
        <img
          src="/images/logo.svg"
          alt="MentaPixel Logo"
          width={100}
          height={34}
          className="h-auto"
        />
      </div>

      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mentagreen to-white">
            {t('banner.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90">
            {t('banner.subtitle')}
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "🎨",
                titleKey: "banner.pillars.design.title",
                descriptionKey: "banner.pillars.design.description"
              },
              {
                icon: "💻",
                titleKey: "banner.pillars.programming.title",
                descriptionKey: "banner.pillars.programming.description"
              },
              {
                icon: "🤖",
                titleKey: "banner.pillars.ai.title",
                descriptionKey: "banner.pillars.ai.description"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl md:text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{t(pillar.titleKey)}</h3>
                <p className="text-white/80">{t(pillar.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner; 