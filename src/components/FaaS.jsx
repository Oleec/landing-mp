import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FaaSImage from '../assets/images/Freelancer as a Service 1.png';

const FaaS = () => {
  const { t } = useTranslation();

  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text + Features */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
                {t('faas.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-10 text-center lg:text-left">
                {t('faas.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-teal-600 text-white rounded-lg p-4 shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-1">{t('faas.features.team.title')}</h3>
                  <p className="text-sm">{t('faas.features.team.description')}</p>
                </div>
                <div className="bg-teal-400 text-white rounded-lg p-4 shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-1">{t('faas.features.scalability.title')}</h3>
                  <p className="text-sm">{t('faas.features.scalability.description')}</p>
                </div>
                <div className="bg-teal-300 text-white rounded-lg p-4 shadow-md text-center">
                  <h3 className="font-semibold text-lg mb-1">{t('faas.features.control.title')}</h3>
                  <p className="text-sm">{t('faas.features.control.description')}</p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
              <img
                  src={FaaSImage}
                  alt="Freelancer as a Service"
                  className="w-full max-w-md rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default FaaS;
