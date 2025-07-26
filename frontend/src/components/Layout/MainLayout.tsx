import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-2 sm:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
