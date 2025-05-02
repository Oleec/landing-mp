import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import '../assets/css/styles.css';
import BannerImg from '../assets/images/landingbanner-mentapixel.jpg'
import BannerLogo from '../assets/images/mentapixel-logo-banner.png';
import designImg from '../assets/images/design-icon.svg';
import programmingImg from '../assets/images/programming-icon.svg';
import aiImg from '../assets/images/ai-icon.svg';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen bg-mentadark text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BannerImg}
          alt="Technology Banner"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto p-8 text-center mt-96 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

            {/* Floating Logo */}
            <div className=" flex justify-center mt-16 py-4 ">
                <div className="absolute w-48 h-48 bg-white opacity-20 rounded-full blur-3xl"></div>

                <img
                    src={BannerLogo}
                    alt="MentaPixel Logo"
                    width={435}
                    height={211}
                    className="h-auto"
                />
            </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90">
            {t('banner.subtitle')}
          </p>

          {/* Pillars */}
          <div className="bannerIcons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: designImg,
                titleKey: "banner.pillars.design.title",
                descriptionKey: "banner.pillars.design.description"
              },
              {
                icon: programmingImg,
                titleKey: "banner.pillars.programming.title",
                descriptionKey: "banner.pillars.programming.description"
              },
              {
                icon: aiImg,
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
                  <div className="mb-4 flex justify-center">
                      <img src={pillar.icon} alt="" className= "w-[3.8125rem] h-[3.8125rem]" />
                  </div>
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