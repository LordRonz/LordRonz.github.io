/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import About from '@/components/About';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Seo from '@/components/Seo';

const Main: NextPage = () => {
  return (
    <div className="bg-gray-900 body-font">
      <Seo />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
