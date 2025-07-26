import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  Calendar, 
  Home, 
  Building, 
  Info, 
  Phone, 
  UserPlus,
  ChevronDown,
  Settings,
  Bell,
  Search
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const navigation = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.rooms'), href: '/rooms', icon: Building },
    { name: t('nav.about'), href: '/about', icon: Info },
    { name: t('nav.contact'), href: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-neutral-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-modern">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold gradient-text">Gift of God</span>
              <p className="text-xs text-neutral-500 font-medium">HOTEL & RESORT</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Menu & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-xl transition-all duration-300 border border-neutral-200 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-neutral-700 font-medium">{user.name}</span>
                  <ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl py-2 border border-neutral-200"
                    >
                      <div className="px-4 py-3 border-b border-neutral-200">
                        <p className="text-sm font-medium text-neutral-900">{user.name}</p>
                        <p className="text-xs text-neutral-500">{user.email}</p>
                      </div>
                      
                      <Link
                        to="/dashboard"
                        className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Calendar className="h-4 w-4 text-primary-500" />
                        <span>{t('nav.myReservations')}</span>
                      </Link>
                      
                      <Link
                        to="/profile"
                        className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4 text-neutral-500" />
                        <span>{t('nav.profile')}</span>
                      </Link>
                      
                      <div className="border-t border-neutral-200 my-2"></div>
                      
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                      >
                        <LogOut className="h-4 w-4 text-error-500" />
                        <span>{t('nav.logout')}</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="btn btn-ghost"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary"
                >
                  <UserPlus className="h-4 w-4" />
                  {t('nav.register')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-neutral-50 hover:bg-neutral-100 p-3 rounded-xl text-neutral-700 hover:text-neutral-900 transition-all duration-300 border border-neutral-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white rounded-2xl mt-4 p-6 border border-neutral-200 shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl ${
                        isActive(item.href) ? 'bg-primary-50 text-primary-600' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
                
                {user ? (
                  <>
                    <div className="border-t border-neutral-200 pt-4 mt-4">
                      <div className="flex items-center space-x-3 mb-4 px-4 py-3 bg-neutral-50 rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-neutral-900 font-medium">{user.name}</p>
                          <p className="text-xs text-neutral-500">{t('nav.activeUser')}</p>
                        </div>
                      </div>
                      
                      <Link
                        to="/dashboard"
                        className="block text-neutral-700 hover:text-primary-600 transition-colors mb-3 flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-neutral-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Calendar className="h-4 w-4" />
                        <span>{t('nav.myReservations')}</span>
                      </Link>
                      
                      <Link
                        to="/profile"
                        className="block text-neutral-700 hover:text-primary-600 transition-colors mb-3 flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-neutral-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        <span>{t('nav.profile')}</span>
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="text-neutral-700 hover:text-error-600 transition-colors flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-neutral-50 w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>{t('nav.logout')}</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="border-t border-neutral-200 pt-4 mt-4 flex flex-col space-y-3">
                    <Link
                      to="/login"
                      className="btn btn-ghost text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('nav.login')}
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-primary text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="h-4 w-4" />
                      {t('nav.register')}
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;