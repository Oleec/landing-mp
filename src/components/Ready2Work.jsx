import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Ready2Work = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: "📝",
      titleKey: "ready2work.steps.step1.title",
      descriptionKey: "ready2work.steps.step1.description"
    },
    {
      icon: "🔍",
      titleKey: "ready2work.steps.step2.title",
      descriptionKey: "ready2work.steps.step2.description"
    },
    {
      icon: "👥",
      titleKey: "ready2work.steps.step3.title",
      descriptionKey: "ready2work.steps.step3.description"
    },
    {
      icon: "👨‍💼",
      titleKey: "ready2work.steps.step4.title",
      descriptionKey: "ready2work.steps.step4.description"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-mentadark">{t('ready2work.title')}</h2>
          <p className="text-base sm:text-lg text-mentagray leading-relaxed">
            {t('ready2work.description')}
          </p>
        </motion.div>

        {/* How it Works */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-mentadark">{t('ready2work.howItWorks')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl mb-3">{step.icon}</div>
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-mentadark">{t(step.titleKey)}</h4>
                <p className="text-mentagray">{t(step.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-mentadark">{t('ready2work.differentiator.title')}</h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="prose lg:prose-lg">
              <p className="text-mentagray">
                {t('ready2work.differentiator.point1')}
              </p>
            </div>
            
            <div className="relative h-48 md:h-full">
              <img
                src="/src/assets/images/collaboration.svg"
                alt="Team Collaboration"
                className="object-contain rounded-lg w-full h-full"
              />
            </div>

            <div className="prose lg:prose-lg md:col-span-2">
              <p className="text-mentagray">
                {t('ready2work.differentiator.point2')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ready2Work; 