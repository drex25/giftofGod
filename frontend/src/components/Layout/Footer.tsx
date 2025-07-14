import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  BuildingOfficeIcon,
  HeartIcon,
  ArrowUpIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  UserIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.rooms'), path: '/rooms' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const services = [
    { name: t('footer.accommodation'), path: '/rooms' },
    { name: t('footer.tours'), path: '/tours' },
    { name: t('footer.transport'), path: '/transport' },
    { name: 'Eventos', path: '/events' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'YouTube', url: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-modern py-16">
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
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-medium">
                  <BuildingOfficeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">Gift of God</h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    HOSTEL & EXPERIENCES
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 leading-relaxed body-medium">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-medium"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
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
            <h4 className="heading-4 mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-4 mb-6 text-white">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 body-medium hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="heading-4 mb-6 text-white">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-medium">
                  <PhoneIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Teléfono</p>
                  <p className="text-white body-medium">+1 234 567 890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-medium">
                  <EnvelopeIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <p className="text-white body-medium">info@giftofgod.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-medium">
                  <MapPinIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Dirección</p>
                  <p className="text-white body-small">{t('footer.address')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-neutral-800">
        <div className="container-modern py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="heading-4 mb-4 text-white">Mantente Conectado</h4>
            <p className="text-neutral-400 body-medium mb-6 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter para recibir ofertas especiales y noticias
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="btn btn-primary px-6 py-3">
                Suscribirse
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="container-modern py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-neutral-400 body-small"
            >
              <span>© 2024 Gift of God.</span>
              <span>{t('footer.rights')}</span>
              <HeartIcon className="w-4 h-4 text-primary-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-neutral-400"
            >
              <Link to="/privacy" className="hover:text-primary-400 transition-colors body-small">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors body-small">
                Términos de Servicio
              </Link>
              <Link to="/cookies" className="hover:text-primary-400 transition-colors body-small">
                Política de Cookies
              </Link>
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
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white hover:shadow-glow transition-all duration-300 shadow-medium"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;