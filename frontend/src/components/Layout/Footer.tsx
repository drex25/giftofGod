import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart,
  ArrowUp,
  Building
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">Gift of God</h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    HOTEL & RESORT
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 leading-relaxed body-medium">
                Descubre el lujo y la comodidad en nuestro exclusivo hotel. Ofrecemos experiencias únicas y servicios de primera clase para hacer de tu estadía algo inolvidable.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-4 mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/rooms" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium"
                >
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard" 
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium"
                >
                  Mi Cuenta
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-4 mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium">
                  Alojamiento Premium
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium">
                  Tours Guiados
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium">
                  Transporte Privado
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium">
                  Traslado Aeropuerto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-4 mb-6 text-white">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 caption">Teléfono</p>
                  <p className="text-white body-medium">+1 234 567 890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 caption">Email</p>
                  <p className="text-white body-medium">info@giftofgod.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 caption">Dirección</p>
                  <p className="text-white body-small">123 Paradise Street, Resort City, RC 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-neutral-400 body-small"
            >
              <span>© 2024 Gift of God.</span>
              <span>Todos los derechos reservados.</span>
              <Heart className="w-4 h-4 text-primary-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-neutral-400"
            >
              <a href="#" className="hover:text-primary-400 transition-colors body-small">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors body-small">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors body-small">
                Política de Cookies
              </a>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 shadow-md"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;