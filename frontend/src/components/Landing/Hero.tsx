import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, CalendarDays, Users, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-100 via-secondary-100 to-pink-100 opacity-60" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 dark:text-white mb-6 drop-shadow-lg">
        Vive la experiencia <span className="text-primary-600">Gift of God Hostel</span>
      </h1>
      <p className="text-lg md:text-2xl text-neutral-700 dark:text-neutral-200 mb-8 max-w-2xl mx-auto">
        Tu hospedaje soñado en el corazón de la ciudad. Habitaciones modernas, ambiente único y reservas 100% online.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Link to="/rooms" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-lg shadow-lg hover:bg-primary-700 transition-all">
          <BedDouble className="w-6 h-6" /> Ver habitaciones
        </Link>
        <Link to="/booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/80 text-primary-600 font-bold text-lg shadow-lg hover:bg-primary-50 transition-all border border-primary-200">
          <CalendarDays className="w-6 h-6" /> Reservar ahora
        </Link>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
          <Users className="w-5 h-5" /> Para todos los viajeros
        </div>
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
          <BedDouble className="w-5 h-5" /> Habitaciones modernas
        </div>
        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
          <CalendarDays className="w-5 h-5" /> Reserva flexible
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-32 bg-gradient-to-t from-white/80 dark:from-neutral-900/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
