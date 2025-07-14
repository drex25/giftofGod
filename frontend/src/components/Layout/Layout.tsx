import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedGradient from '../UI/AnimatedGradient';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Fondo animado sutil */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-gradient opacity-5"></div>
      
      <Header />
      <main className="flex-grow relative z-10">
        <AnimatedGradient className="min-h-full">
          {children}
        </AnimatedGradient>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;