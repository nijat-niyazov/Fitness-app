import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components/comExporter';

const AppLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AppLayout;
