import React, { useState } from 'react';
import "./style.css";
import Dice from "./Components/Dice";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  }

  const diceNumbers = dice.map(number => <Dice value={number} />);

  return (
    <main>
      <h1>Tenzies Game</h1>
      <div className="container">
        <div className="dice--container">
          {diceNumbers}
        </div>
        <button type="button" className='btn'>Roll</button>
      </div>
      <h3>marshal.rocks</h3>
    </main>
  );
}

export default App;
