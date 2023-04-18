import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbarr from '../components/HeadMenu/Navbar';
import { Footer } from '../components/comExporter';

const AppLayout = () => {
  return (
    <>
      <header>
        <Navbarr />
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
