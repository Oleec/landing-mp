import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: "📝",
    title: "Registro de Tarea",
    description: "La empresa registra una tarea especificando las habilidades requeridas."
  },
  {
    icon: "🔍",
    title: "Filtrado y Selección",
    description: "Nuestro sistema filtra y selecciona los desarrolladores que poseen estas habilidades y arma un equipo."
  },
  {
    icon: "👥",
    title: "Formación de Equipos",
    description: "Se crea una pareja o equipo complementario en habilidades."
  },
  {
    icon: "👨‍💼",
    title: "Dirección del Proyecto",
    description: "Se asigna un director de proyecto de MentaPixel."
  }
];

const Ready2Work = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-mentadark">Ready2Work</h2>
          <p className="text-base sm:text-lg text-mentagray leading-relaxed">
            Ready2Work: es una iniciativa social de MentaPixel. Es una plataforma innovadora diseñada para conectar de manera eficiente y efectiva a las empresas con desarrolladores. A través de un sistema de matching único, creamos equipos de trabajo compuestos por especialistas con habilidades complementarias, adaptados a las necesidades específicas de cada proyecto.
          </p>
        </motion.div>

        {/* How it Works */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-mentadark">¿Cómo Funciona?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl mb-3">{step.icon}</div>
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-mentadark">{step.title}</h4>
                <p className="text-mentagray">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Differentiators */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-mentadark">¿Cómo se diferencia Ready2Work de otras plataformas?</h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="prose lg:prose-lg">
              <p className="text-mentagray">
                Al armar equipos de desarrollo complementados en habilidades se asegura la culminación positiva del proyecto. MentaPixel se encarga del project management, liberando la carga laboral de la empresa.
              </p>
            </div>
            
            <div className="relative h-48 md:h-full">
              <img
                src="/images/collaboration.svg"
                alt="Team Collaboration"
                className="object-contain rounded-lg w-full h-full"
              />
            </div>

            <div className="prose lg:prose-lg md:col-span-2">
              <p className="text-mentagray">
                Después de finalizar el proyecto, las empresas podrían contratar directamente al desarrollador. MentaPixel asume la responsabilidad del desarrollo y el cumplimiento satisfactorio del proyecto, lo que representa un 100% de seguridad en la culminación, sin riesgo para la empresa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ready2Work; 