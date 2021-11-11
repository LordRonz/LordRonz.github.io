import './App.css';
import './styles/globals.css';

import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import Home from './components/Home';

const About = React.lazy(() => import('./components/About'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = (): JSX.Element => (
  <div className="App text-gray-400 bg-gray-900 body-font">
    <Helmet>
      <title>Aaron Christopher</title>
    </Helmet>
    <Home />
    <Suspense fallback={<div>Loading...</div>}>
      <About />
      <Footer />
    </Suspense>
  </div>
);

export default App;
