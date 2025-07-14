import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Bars3Icon, 
  XMarkIcon, 
  UserCircleIcon,
  HomeIcon,
  BuildingOfficeIcon,
  UserIcon,
  CpuChipIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '/', icon: HomeIcon },
    { name: 'Habitaciones', href: '/rooms', icon: BuildingOfficeIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Navbar futurista */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark backdrop-blur-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo futurista */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <CpuChipIcon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-display font-bold gradient-text">
                  CyberHostel
                </h1>
                <p className="text-xs text-gray-400 font-mono">FUTURE.STAY.EXPERIENCE</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active text-neon-cyan' : ''}`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="nav-link flex items-center space-x-2"
                  >
                    <UserIcon className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="cyber-button text-sm"
                    >
                      <BoltIcon className="w-4 h-4 mr-2" />
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="nav-link"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="cyber-button text-sm"
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 p-2"
              >
                {isOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-dark backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              {user ? (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserIcon className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-neon-purple border border-neon-purple/30"
                      onClick={() => setIsOpen(false)}
                    >
                      <BoltIcon className="w-5 h-5" />
                      <span>Admin Panel</span>
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-all duration-300 w-full text-left"
                  >
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/login"
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="cyber-button w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer para el navbar fijo */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;