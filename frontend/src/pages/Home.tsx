import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  MapPin, 
  Users, 
  Star, 
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'WiFi Gratuito',
      description: 'Conectividad de alta velocidad en todas las áreas'
    },
    {
      icon: MapPin,
      title: 'Ubicación Céntrica',
      description: 'A minutos de los principales puntos turísticos'
    },
    {
      icon: Users,
      title: 'Comunidad Internacional',
      description: 'Conoce viajeros de todo el mundo'
    },
    {
      icon: Star,
      title: 'Excelente Calificación',
      description: '4.8/5 estrellas en las principales plataformas'
    }
  ];

  const testimonials = [
    {
      name: 'María García',
      country: 'España',
      text: 'Excelente ubicación y ambiente muy acogedor. Definitivamente volveré.',
      rating: 5
    },
    {
      name: 'John Smith',
      country: 'Estados Unidos',
      text: 'Las habitaciones están muy limpias y el personal es muy amigable.',
      rating: 5
    },
    {
      name: 'Sofia Chen',
      country: 'Australia',
      text: 'Perfecto para mochileros. Muy buena relación calidad-precio.',
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Tu Hogar
                <span className="block text-yellow-300">Lejos de Casa</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Descubre habitaciones únicas y conecta con viajeros de todo el mundo. 
                Reserva fácil, paga seguro y vive experiencias inolvidables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/rooms"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explorar Habitaciones</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Registrarse Gratis
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Buscar Disponibilidad</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-in</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200"
                        placeholder="Fecha de llegada"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Check-out</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200"
                        placeholder="Fecha de salida"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Huéspedes</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                      <option>1 huésped</option>
                      <option>2 huéspedes</option>
                      <option>3 huéspedes</option>
                      <option>4+ huéspedes</option>
                    </select>
                  </div>
                  <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    Buscar Habitaciones
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir HostelPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos la mejor experiencia para viajeros que buscan comodidad, 
              comunidad y aventura en un solo lugar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
            <p className="text-xl text-gray-600">
              Más de 10,000 viajeros han confiado en nosotros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de viajeros que ya han descubierto el mundo con HostelPro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Crear Cuenta Gratis
            </Link>
            <Link
              to="/rooms"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Ver Habitaciones
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;