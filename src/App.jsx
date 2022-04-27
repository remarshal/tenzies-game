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
    setDice(prevDice => prevDice.map(number => {
      return number.isHeld ? number : {...number, value: Math.floor(Math.random() * 6) + 1}
    }))
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(number => {
      return number.id === id ?
        { ...number, isHeld: !number.isHeld } :
        number
    }))
  }

  const diceNumbers = dice.map(number =>
    <Dice
      value={number.value}
      key={number.id}
      isHeld={number.isHeld}
      holdDice={() => holdDice(number.id)}
    />);

  return (
    <main>
      <h1>TENZI</h1>
      <p className="instructions">Roll dice</p>
      <p className="instructions">Click to freeze same values between rolls.</p>
      <p className="instructions">Win when all dice match!</p>
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
