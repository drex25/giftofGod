import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Calendar, Home, Building, Info, Phone, UserPlus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">Gift of God</span>
              <p className="text-xs text-neutral-500 font-medium">HOTEL & RESORT</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Inicio</span>
            </Link>
            <Link to="/rooms" className="nav-link flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>Habitaciones</span>
            </Link>
            <Link to="/about" className="nav-link flex items-center space-x-2">
              <Info className="h-4 w-4" />
              <span>Nosotros</span>
            </Link>
            <Link to="/contact" className="nav-link flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Contacto</span>
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 bg-neutral-50 hover:bg-neutral-100 px-4 py-2 rounded-xl transition-all duration-300 border border-neutral-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-neutral-700 font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-elegant py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-neutral-200">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                  >
                    <Calendar className="h-4 w-4 text-primary-500" />
                    <span>Mis Reservas</span>
                  </Link>
                  <div className="border-t border-neutral-200 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors flex items-center space-x-3"
                  >
                    <LogOut className="h-4 w-4 text-error-500" />
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="btn-ghost"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  <UserPlus className="h-4 w-4" />
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-neutral-50 hover:bg-neutral-100 p-3 rounded-xl text-neutral-700 hover:text-neutral-900 transition-all duration-300 border border-neutral-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-xl mt-4 p-6 border border-neutral-200 shadow-elegant">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Inicio</span>
              </Link>
              <Link
                to="/rooms"
                className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Building className="h-4 w-4" />
                <span>Habitaciones</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="h-4 w-4" />
                <span>Nosotros</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-3 text-neutral-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Contacto</span>
              </Link>
              
              {user ? (
                <>
                  <div className="border-t border-neutral-200 pt-4 mt-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-neutral-900 font-medium">{user.name}</p>
                        <p className="text-xs text-neutral-500">Usuario Activo</p>
                      </div>
                    </div>
                    <Link
                      to="/dashboard"
                      className="block text-neutral-700 hover:text-primary-600 transition-colors mb-3 flex items-center space-x-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Mis Reservas</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-neutral-700 hover:text-error-600 transition-colors flex items-center space-x-3"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="border-t border-neutral-200 pt-4 mt-4 flex flex-col space-y-3">
                  <Link
                    to="/login"
                    className="btn-ghost text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserPlus className="h-4 w-4" />
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;