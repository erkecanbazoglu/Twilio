import React from 'react';
import Header from './header/Header';
import Padding from './Padding';
import Footer from './footer/Footer';
import BodyFirstPart from './body/BodyFirstPart';
import BodySecondPart from './body/BodySecondPart';
import '../index.css';

function App() {
  return (
    <div>
      <div className="bg-gray-50 px-40 dark:bg-gray-800 dark:border-gray-700">
        <div className="drop-shadow-xl">
          <Header />
          <BodyFirstPart />
          <BodySecondPart />
          <Padding />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
