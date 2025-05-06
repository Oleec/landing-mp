import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ready2WorkSectionLogo from "../assets/images/Ready2WorkSectionLogo.png";
import ready2workSectionImg from "../assets/images/ready2WorkSectionImg.png";

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
    <section className="py-20 bg-white">
        {/* Differentiators */}
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center bg-white">
              <img src={ready2WorkSectionLogo} alt="Logo" className="h-full object-contain" />
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mt-16">

            {/* Paragraph + Button */}
            <div className="pt-16 pl-16 bg-white">
              <p className="text-base sm:text-lg text-mentagray leading-relaxed">
                {t('ready2work.description')}
              </p>
              <button className="mt-8 border-rounded px-4 py-2 bg-[#99FF99] hover:bg-gray-100">
                 learn more...
              </button>
            </div>

            {/* Image */}
            <div className=" flex items-center justify-center bg-white">
              <img src={ready2workSectionImg} alt="Image" className="h-full object-contain " />
            </div>

          </div>
        </div>

    </section>
  );
};

export default Ready2Work; 