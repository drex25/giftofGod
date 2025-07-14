import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowRight,
  Building,
  Users,
  Shield,
  Star
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.rooms'), href: '/rooms' },
    { name: t('navigation.about'), href: '/about' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const services = [
    { name: t('home.amenities.wifi'), icon: Building },
    { name: t('home.amenities.breakfast'), icon: Users },
    { name: t('home.amenities.beds'), icon: Shield },
    { name: t('home.amenities.kitchen'), icon: Star },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'YouTube', href: '#', icon: Youtube },
  ];

  return (
    <footer className="bg-gradient-to-br from-earth-900 via-earth-800 to-earth-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text-warm">Gift Of God</h3>
                <p className="text-sm text-earth-300 font-medium">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-earth-300 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-earth-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center space-x-3">
                  <service.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-earth-300">{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <p className="text-earth-300">{t('footer.address')}</p>
                  <p className="text-earth-300">{t('footer.city')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href={`tel:${t('footer.phone')}`}
                  className="text-earth-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="text-earth-300 hover:text-primary-400 transition-colors duration-300"
                >
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earth-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-earth-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-earth-400 hover:text-primary-400 transition-colors duration-300"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-earth-400 hover:text-primary-400 transition-colors duration-300"
              >
                {t('footer.terms')}
              </Link>
              <Link
                to="/cookies"
                className="text-earth-400 hover:text-primary-400 transition-colors duration-300"
              >
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;