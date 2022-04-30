import React, { useState, useEffect } from 'react';
import Logo from './img/logo.png';
import "./style.css";
import Dice from "./Components/Dice";

function App() {
  const [dice, setDice] = useState(allNewDice());

  // represents whether user has won the game
  const [tenzi, setTenzi] = useState(false);

  // checks dice for winning condition; setTenzi to true
  // using useEffect to keep 2 internal states in sync with each other
  useEffect(() => {
    const allHeld = dice.every(number => number.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(number => number.value === firstValue)
    if (allHeld && allSameValue) {
      console.log("winner")
      setTenzi(true)
    } else {
      console.log("keep playing")
    }
  }, [dice]);

  tenzi ? console.log("yes") : console.log("no")

  // generate 10 random dice numbers
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i
      });
    }
    return newDice;
  }

  // roll only if dice is not held
  function rollDice() {
    setDice(prevDice => prevDice.map(number => {
      return number.isHeld ? number : { ...number, value: Math.floor(Math.random() * 6) + 1 };
    }));
  }

  // flip isHeld when dice is clicked
  function holdDice(id) {
    setDice(prevDice => prevDice.map(number => {
      return number.id === id ?
        { ...number, isHeld: !number.isHeld } :
        number;
    }));
  }

  // dynamically creates dice from Component
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
      <p className="instructions">Roll dice to start game.</p>
      <p className="instructions">Freeze same value dice between rolls.</p>
      <p className="instructions">How many rolls for ALL dice match?</p>
      <div className="container">
        <div className="dice--container">
          {diceNumbers}
        </div>
        <button type="button" className='btn' onClick={rollDice} >{tenzi ? "Winner!!!" : "Roll"}</button>
      </div>
      <footer>
        <img src={Logo} alt="Marshal Rocks Logo" className='logo--img' />
        <h3>marshal.rocks</h3>
      </footer>
    </main>
  );
}

export default App;
