import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Calendar, Home, MapPin, Heart, Phone } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../UI/LanguageSelector';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-earth-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-warm">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-display font-bold gradient-text-warm">Gift Of God</span>
              <p className="text-xs text-earth-500 font-medium">HOSPITALITY & COMFORT</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-primary-600' : ''}`}
            >
              <Home className="w-4 h-4 mr-2 inline" />
              {t('navigation.home')}
            </Link>
            <Link 
              to="/rooms" 
              className={`nav-link ${isActive('/rooms') ? 'text-primary-600' : ''}`}
            >
              <MapPin className="w-4 h-4 mr-2 inline" />
              {t('navigation.rooms')}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-primary-600' : ''}`}
            >
              <Heart className="w-4 h-4 mr-2 inline" />
              {t('navigation.about')}
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'text-primary-600' : ''}`}
            >
              <Phone className="w-4 h-4 mr-2 inline" />
              {t('navigation.contact')}
            </Link>
          </nav>

          {/* User Menu / Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <LanguageSelector />
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="btn-ghost flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-outline flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{t('navigation.logout')}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="btn-ghost"
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  {t('navigation.register')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden btn-ghost p-3 rounded-xl"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden card-glass mt-4 p-6 border border-earth-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors ${
                  isActive('/') ? 'bg-primary-50 text-primary-600' : 'text-earth-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-4 h-4" />
                <span>{t('navigation.home')}</span>
              </Link>
              <Link
                to="/rooms"
                className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors ${
                  isActive('/rooms') ? 'bg-primary-50 text-primary-600' : 'text-earth-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-4 h-4" />
                <span>{t('navigation.rooms')}</span>
              </Link>
              <Link
                to="/about"
                className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors ${
                  isActive('/about') ? 'bg-primary-50 text-primary-600' : 'text-earth-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-4 h-4" />
                <span>{t('navigation.about')}</span>
              </Link>
              <Link
                to="/contact"
                className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors ${
                  isActive('/contact') ? 'bg-primary-50 text-primary-600' : 'text-earth-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>{t('navigation.contact')}</span>
              </Link>
              
              {/* Language Selector Mobile */}
              <div className="border-t border-earth-200 pt-4">
                <LanguageSelector />
              </div>
              
              <div className="border-t border-earth-200 pt-4 mt-4">
                {user ? (
                  <div className="space-y-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 py-2 px-3 rounded-lg text-earth-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>{user.name}</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 py-2 px-3 rounded-lg text-earth-600 hover:text-primary-600 hover:bg-primary-50 transition-colors w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('navigation.logout')}</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="flex items-center justify-center py-2 px-4 rounded-lg text-primary-600 border border-primary-200 hover:bg-primary-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('navigation.login')}
                    </Link>
                    <Link
                      to="/register"
                      className="flex items-center justify-center py-2 px-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('navigation.register')}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;