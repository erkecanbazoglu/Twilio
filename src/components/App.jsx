import React from 'react';
import Header from './header/Header';
import Padding from './Padding';
import Footer from './footer/Footer';
import BodyFirstPart from './body/BodyFirstPart';

function App() {
  return (
    <div>
      <div class="bg-gray-50 px-40 dark:bg-gray-800 dark:border-gray-700">
        <div class="drop-shadow-xl">
          <Header />
          <BodyFirstPart />
          <Padding />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
