import React from 'react';
import Hello from './Hello';
import Header from './headers/Header';
import Padding from './Padding';


function App() {
  return (
    <div>
      <div class="bg-gray-50 px-40 dark:bg-gray-800 dark:border-gray-700">
        <div class="drop-shadow-xl">
          <Header />
          <Padding />
          <Hello />
        </div>

      </div>
    </div>
  );
}

export default App;
