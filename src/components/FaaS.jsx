import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FaaS = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">{t('faas.title')}</h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              {t('faas.description')}
            </p>
          </div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">{t('faas.features.team.title')}</h3>
              <p className="text-gray-600">{t('faas.features.team.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">{t('faas.features.scalability.title')}</h3>
              <p className="text-gray-600">{t('faas.features.scalability.description')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">{t('faas.features.control.title')}</h3>
              <p className="text-gray-600">{t('faas.features.control.description')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaaS; 