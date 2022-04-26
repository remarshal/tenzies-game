import React, { useState } from 'react';
import Logo from './img/logo.png'
import "./style.css";
import Dice from "./Components/Dice";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: i
      });
    }
    console.log(newDice)
    return newDice;
  }

  function rollDice () {
    setDice(allNewDice())
  }

  const diceNumbers = dice.map(number => <Dice value={number.value} key={number.id} />);

  return (
    <main>
      <h1>TENZI</h1>
      <div className="container">
        <div className="dice--container">
          {diceNumbers}
        </div>
        <button type="button" className='btn' onClick={rollDice} >Roll</button>
      </div>
      <footer>
      <img src={Logo} alt="Marshal Rocks Logo" className='logo--img' />
      <h3>marshal.rocks</h3>
      </footer>
    </main>
  );
}

export default App;
