import React from 'react';

import Game from './components/Game';

const shuffle = array => {
  return array.sort(() => Math.random() - 0.5);
}

const generateCardsArray = () => {
  let array = [];

  for (let i = 1; i <= 16; i++) {
      array.push(require(`./images/${i}.jpg`), require(`./images/${i}.jpg`));
  }

  return shuffle(array);
}

function App() {
  const array = generateCardsArray();
  
  return (
    <div className="container main-container">
      <div className="row d-flex justify-content-center">
        <Game array={array} />
      </div>
    </div>
    
  );
}

export default App;
