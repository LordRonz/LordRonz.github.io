import './App.css';
import './styles/globals.css';

import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router';

import NotFoundPage from './components/404';
import Home from './components/Home';

const About = React.lazy(() => import('./components/About'));
const Footer = React.lazy(() => import('./components/Footer'));

export const Main = (): JSX.Element => (
  <div className="App bg-gray-900 body-font">
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

const App = (): JSX.Element => (
  <Routes>
    <Route
      path="/"
      element={(
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
        </Suspense>
    )}
    />
    <Route
      path="*"
      element={(
        <Suspense fallback={<div>Loading...</div>}>
          <NotFoundPage />
        </Suspense>
    )}
    />
  </Routes>
);

export default App;
