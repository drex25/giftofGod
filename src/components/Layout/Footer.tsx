import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  CpuChipIcon,
  BoltIcon,
  GlobeAltIcon
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-900/50 backdrop-blur-xl border-t border-white/10">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand futurista */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center">
                  <CpuChipIcon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-pink rounded-lg blur-lg opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text">CyberHostel</h3>
                <p className="text-xs text-gray-400 font-mono">FUTURE.STAY.EXPERIENCE</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Conectando viajeros digitales en el metaverso del hospedaje. 
              Experimenta habitaciones inteligentes, tecnología cuántica y 
              una comunidad global de exploradores del futuro.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-pink hover:border-neon-pink/30 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-neon-purple hover:border-neon-purple/30 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-6 flex items-center">
              <BoltIcon className="w-5 h-5 text-neon-cyan mr-2" />
              Neural Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-mono text-sm">
                  > Home.exe
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-mono text-sm">
                  > Rooms.db
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-mono text-sm">
                  > Login.auth
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-mono text-sm">
                  > Register.new
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-6 flex items-center">
              <GlobeAltIcon className="w-5 h-5 text-neon-green mr-2" />
              Connect.sys
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Neo Tokyo District</p>
                  <p className="text-gray-400 text-sm font-mono">Sector 7, Block 2049</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-neon-pink/10 border border-neon-pink/30 rounded-lg flex items-center justify-center mt-0.5">
                  <Phone className="w-4 h-4 text-neon-pink" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Quantum Line</p>
                  <p className="text-gray-400 text-sm font-mono">+1 (555) CYBER-01</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-neon-purple/10 border border-neon-purple/30 rounded-lg flex items-center justify-center mt-0.5">
                  <Mail className="w-4 h-4 text-neon-purple" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Neural Mail</p>
                  <p className="text-gray-400 text-sm font-mono">info@cyberhostel.net</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm font-mono">
                © 2025 CyberHostel v2.0.25 | All rights reserved in the metaverse
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-neon-cyan text-sm font-mono transition-colors duration-300">
                Privacy.policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-neon-cyan text-sm font-mono transition-colors duration-300">
                Terms.agreement
              </Link>
              <Link to="/help" className="text-gray-400 hover:text-neon-cyan text-sm font-mono transition-colors duration-300">
                Help.docs
              </Link>
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="flex items-center justify-center mt-6 space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-xs font-mono">QUANTUM SERVERS ONLINE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-xs font-mono">NEURAL NETWORK ACTIVE</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-xs font-mono">MATRIX SYNCHRONIZED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;