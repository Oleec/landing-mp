import React from 'react';
import { motion } from 'framer-motion';

const FaaS = () => {
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
          <h2 className="text-4xl font-bold mb-8">Freelancer as a Service (FaaS)</h2>
          <div className="prose lg:prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              FaaS (Freelancer as a Service) no es una red de freelancers, sino un equipo de trabajo consolidado con más de cuatro años de experiencia colaborando juntos. Nuestro modelo se adapta al crecimiento y a las necesidades de cada cliente, ampliando el equipo de forma estratégica según los requerimientos del proyecto. Mantenemos siempre el control directo tanto del equipo como de las tareas y proyectos in-house, garantizando una gestión eficiente sin recurrir a la subcontratación o externalización.
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
              <h3 className="text-xl font-semibold mb-2">Equipo Consolidado</h3>
              <p className="text-gray-600">Más de 4 años trabajando juntos</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Escalabilidad</h3>
              <p className="text-gray-600">Adaptación según necesidades</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Control Directo</h3>
              <p className="text-gray-600">Gestión in-house eficiente</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaaS; 