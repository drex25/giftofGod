import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Calendar, Home, Zap, Cpu } from 'lucide-react';
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
    <header className="glass-dark sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-display font-bold gradient-text">CyberHostel</span>
              <p className="text-xs text-gray-400 font-mono">FUTURE.STAY.EXPERIENCE</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              <span className="font-mono text-sm">> Home.exe</span>
            </Link>
            <Link to="/rooms" className="nav-link">
              <span className="font-mono text-sm">> Rooms.db</span>
            </Link>
            <Link to="/about" className="nav-link">
              <span className="font-mono text-sm">> About.sys</span>
            </Link>
            <Link to="/contact" className="nav-link">
              <span className="font-mono text-sm">> Contact.net</span>
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-3 glass-primary px-4 py-2 rounded-xl hover:scale-105 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{user.name}</span>
                  <Zap className="h-4 w-4 text-neon-cyan" />
                </button>
                <div className="absolute right-0 mt-3 w-56 glass-primary rounded-xl shadow-elegant py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-3 text-sm text-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center space-x-3"
                  >
                    <Calendar className="h-4 w-4 text-neon-cyan" />
                    <span>Mis Reservas</span>
                  </Link>
                  <div className="border-t border-white/10 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-3 text-sm text-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center space-x-3"
                  >
                    <LogOut className="h-4 w-4 text-neon-pink" />
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-neon-cyan transition-colors font-mono text-sm"
                >
                  > Login.auth
                </Link>
                <Link
                  to="/register"
                  className="cyber-button rounded-xl"
                >
                  > Register.new
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden glass-primary p-3 rounded-xl text-white hover:scale-105 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-primary rounded-xl mt-4 p-6 border border-white/10">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                > Home.exe
              </Link>
              <Link
                to="/rooms"
                className="text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                > Rooms.db
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                > About.sys
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                > Contact.net
              </Link>
              
              {user ? (
                <>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-xs text-gray-400 font-mono">USER_ACTIVE</p>
                      </div>
                    </div>
                    <Link
                      to="/dashboard"
                      className="block text-white hover:text-neon-cyan transition-colors mb-3 font-mono text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      > Dashboard.exe
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-white hover:text-neon-pink transition-colors font-mono text-sm"
                    >
                      > Logout.sys
                    </button>
                  </div>
                </>
              ) : (
                <div className="border-t border-white/10 pt-4 mt-4 flex flex-col space-y-3">
                  <Link
                    to="/login"
                    className="text-white hover:text-neon-cyan transition-colors font-mono text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    > Login.auth
                  </Link>
                  <Link
                    to="/register"
                    className="cyber-button rounded-xl text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    > Register.new
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