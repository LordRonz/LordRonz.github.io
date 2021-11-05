import React from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';

const App = (): JSX.Element => (
  <div className="App text-gray-400 bg-gray-900 body-font">
    <Home />
    <About />
  </div>
);

export default App;
