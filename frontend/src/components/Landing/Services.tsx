import React from 'react';
import { BedDouble, Wifi, Coffee, ShieldCheck, Users, Star } from 'lucide-react';

const services = [
  { icon: BedDouble, title: 'Habitaciones modernas', desc: 'Camas cómodas, lockers y limpieza diaria.' },
  { icon: Wifi, title: 'Wi-Fi rápido', desc: 'Internet de alta velocidad en todo el hostel.' },
  { icon: Coffee, title: 'Desayuno incluido', desc: 'Empieza tu día con energía.' },
  { icon: ShieldCheck, title: 'Seguridad 24/7', desc: 'Acceso controlado y cámaras.' },
  { icon: Users, title: 'Ambiente social', desc: 'Áreas comunes y actividades.' },
  { icon: Star, title: 'Ubicación top', desc: 'Cerca de todo lo importante.' },
];


import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const Services: React.FC = () => (
  <section className="relative py-24 bg-gradient-to-br from-primary-100 via-secondary-100 to-pink-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden">
    {/* Fondo visual pro */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="serviceWave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="url(#serviceWave)" />
      </svg>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 z-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-neutral-900 dark:text-white drop-shadow-lg tracking-tight">
        Servicios destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl border border-white/40 dark:border-neutral-800/40 hover:scale-[1.04] transition-transform group relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: i * 0.12, duration: 0.7 }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 opacity-20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
            <s.icon className="w-14 h-14 text-primary-600 mb-8 drop-shadow-lg" />
            <h3 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-white text-center group-hover:text-primary-600 transition-colors">
              {s.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-center text-lg">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
