import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  MapPin, 
  Users, 
  Star, 
  Calendar,
  ArrowRight,
  CheckCircle,
  ShieldCheckIcon,
  GlobeAltIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: CpuChipIcon,
      title: 'Smart Rooms',
      description: 'Habitaciones inteligentes con tecnología IoT y control automatizado',
      color: 'from-neon-cyan to-blue-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Network',
      description: 'Conecta con viajeros de todo el mundo en nuestra red global',
      color: 'from-neon-pink to-purple-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quantum Security',
      description: 'Seguridad de nivel cuántico para proteger tu información',
      color: 'from-neon-green to-emerald-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Instant Booking',
      description: 'Reservas instantáneas con confirmación en tiempo real',
      color: 'from-neon-purple to-violet-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      country: 'Neo Tokyo',
      text: 'Una experiencia completamente futurista. Las habitaciones inteligentes son increíbles.',
      rating: 5,
      avatar: '🤖'
    },
    {
      name: 'Maya Rodriguez',
      country: 'Cyber Madrid',
      text: 'El diseño y la tecnología superaron todas mis expectativas. Volveré sin duda.',
      rating: 5,
      avatar: '🚀'
    },
    {
      name: 'Kai Nakamura',
      country: 'Digital Seoul',
      text: 'Perfecto para nómadas digitales. WiFi cuántico y espacios de trabajo increíbles.',
      rating: 5,
      avatar: '⚡'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Cyber Travelers', icon: Users },
    { number: '50+', label: 'Smart Cities', icon: MapPin },
    { number: '99.9%', label: 'Uptime', icon: BoltIcon },
    { number: '4.9★', label: 'Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cursor personalizado */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease'
        }}
      />

      {/* Hero Section Futurista */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo animado */}
        <div className="absolute inset-0 hero-grid opacity-20"></div>
        
        {/* Elementos flotantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-30 floating-element"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-mono mb-4">
                  NEXT-GEN HOSPITALITY
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                <span className="gradient-text">Cyber</span>
                <br />
                <span className="text-white">Hostel</span>
                <br />
                <span className="text-2xl lg:text-3xl font-normal text-gray-400 font-mono">
                  v2.0.25
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Experimenta el futuro del hospedaje. Habitaciones inteligentes, 
                tecnología cuántica y una comunidad global de viajeros digitales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/rooms"
                  className="cyber-button group"
                >
                  <span>Explorar Habitaciones</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/register"
                  className="px-8 py-4 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-all duration-300 font-semibold text-center"
                >
                  Unirse a la Red
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-6 h-6 text-neon-cyan mr-2" />
                      <span className="text-2xl font-bold text-white">{stat.number}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-mono">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Panel de búsqueda futurista */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="cyber-card p-8 data-stream">
                <div className="flex items-center mb-6">
                  <SparklesIcon className="w-6 h-6 text-neon-cyan mr-3" />
                  <h3 className="text-2xl font-display font-bold text-white">
                    Quantum Search
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        CHECK-IN
                      </label>
                      <input
                        type="date"
                        className="cyber-input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                        CHECK-OUT
                      </label>
                      <input
                        type="date"
                        className="cyber-input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                      TRAVELERS
                    </label>
                    <select className="cyber-input">
                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3 Travelers</option>
                      <option>4+ Travelers</option>
                    </select>
                  </div>
                  
                  <button className="cyber-button w-full group">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Iniciar Búsqueda Cuántica</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Indicadores de estado */}
                <div className="mt-6 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="text-gray-400">QUANTUM READY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                    <span className="text-gray-400">REAL-TIME</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Next-Gen Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnología avanzada que redefine la experiencia de hospedaje
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cyber-card group hover:scale-105 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Cyber Reviews</span>
            </h2>
            <p className="text-xl text-gray-400">
              Lo que dicen nuestros viajeros digitales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="cyber-card group"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-neon-cyan fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400 font-mono">{testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Ready to Jack In?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Únete a la revolución del hospedaje digital y experimenta el futuro hoy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="cyber-button group"
              >
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                <span>Crear Cuenta Neural</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/rooms"
                className="px-8 py-4 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-all duration-300 font-semibold"
              >
                Explorar Matrix
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;