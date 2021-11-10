import './App.css';
import './styles/globals.css';

import React from 'react';
import { Helmet } from 'react-helmet';

import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';

const App = (): JSX.Element => (
  <div className="App text-gray-400 bg-gray-900 body-font">
    <Helmet>
      <title>Aaron Christopher</title>
    </Helmet>
    <Home />
    <About />
    <Footer />
  </div>
);

export default App;
