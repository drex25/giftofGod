import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BuildingOfficeIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  CheckIcon,
  InformationCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';
import LanguageSelector from '../UI/LanguageSelector';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/', icon: HomeIcon },
    { name: t('nav.rooms'), path: '/rooms', icon: BuildingOfficeIcon },
    { name: t('nav.about'), path: '/about', icon: InformationCircleIcon },
    { name: t('nav.contact'), path: '/contact', icon: PhoneIcon },
  ];

  const userMenuItems = [
    { name: 'Mi Dashboard', path: '/dashboard', icon: UserIcon },
    { name: 'Mis Reservas', path: '/reservations', icon: CalendarDaysIcon },
    { name: 'Configuración', path: '/settings', icon: Cog6ToothIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar principal */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-neutral-200' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-modern">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-medium">
                  <BuildingOfficeIcon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold gradient-text">
                    Gift of God
                  </h1>
                  <p className="text-xs text-neutral-500 font-medium">
                    {t('nav.tagline')}
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link flex items-center space-x-2 ${
                      isActive(item.path) ? 'active' : ''
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Selector */}
              <LanguageSelector />
              
              {/* User Menu or Auth Buttons */}
              {user ? (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl px-4 py-2 hover:bg-white hover:shadow-medium transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-neutral-700 font-medium">{user.name}</span>
                    <ChevronDownIcon className={`w-4 h-4 text-neutral-500 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                  </motion.button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-strong border border-neutral-200 overflow-hidden"
                      >
                        <div className="py-2">
                          {userMenuItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setShowUserMenu(false)}
                              className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:bg-neutral-50 transition-colors"
                            >
                              <item.icon className="w-4 h-4" />
                              <span className="body-medium">{item.name}</span>
                            </Link>
                          ))}
                          <div className="border-t border-neutral-200 my-2"></div>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-error-600 hover:bg-error-50 transition-colors"
                          >
                            <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                            <span className="body-medium">{t('nav.logout')}</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="btn btn-ghost"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4" />
                    <span>{t('nav.login')}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-600 hover:text-primary-600 transition-all duration-300"
            >
              {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-strong"
          >
            <div className="container-modern py-6">
              <div className="space-y-4">
                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                          isActive(item.path)
                            ? 'bg-primary-50 text-primary-600 border border-primary-200'
                            : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* User Section */}
                {user ? (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="border-t border-neutral-200 pt-4"
                  >
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-neutral-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <UserIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">{user.name}</p>
                        <p className="text-sm text-neutral-600">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {userMenuItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 p-3 rounded-xl text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 transition-all duration-300"
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl text-error-600 hover:bg-error-50 transition-all duration-300"
                      >
                        <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                        <span className="font-medium">{t('nav.logout')}</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="border-t border-neutral-200 pt-4 space-y-2"
                  >
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                        isActive('/login')
                          ? 'bg-primary-50 text-primary-600 border border-primary-200'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600'
                      }`}
                    >
                      <ArrowRightOnRectangleIcon className="w-5 h-5" />
                      <span className="font-medium">{t('nav.login')}</span>
                    </Link>
                  </motion.div>
                )}

                {/* Language Selector Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-t border-neutral-200 pt-4"
                >
                  <LanguageSelector />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Backdrop for user menu */}
      <AnimatePresence>
        {showUserMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block fixed inset-0 z-40"
            onClick={() => setShowUserMenu(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;