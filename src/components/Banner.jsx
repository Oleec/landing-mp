import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="relative min-h-screen bg-mentadark text-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img
                src={`${process.env.PUBLIC_URL}/images/landingbanner-mentapixel.jpg`}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mentagreen to-white">
            Plan Todo en Uno
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/90">
            Una agencia integral donde el diseño, la programación y la inteligencia artificial están integrados.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "🎨",
                title: "Diseño",
                description: "Creación de interfaces atractivas y usables"
              },
              {
                icon: "💻",
                title: "Programación",
                description: "Desarrollo de software robusto y escalable"
              },
              {
                icon: "🤖",
                title: "Inteligencia Artificial",
                description: "Integración de soluciones inteligentes para potenciar la experiencia digital"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl md:text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-white/80">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner; 