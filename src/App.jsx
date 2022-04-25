import "./style.css";
import Dice from "./Components/Dice";

function App() {

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
      
    }
    return newDice;
  }

  console.log(allNewDice());

  return (
    <main>
      <h1>Tenzies Game</h1>
      <div className="container">
        <div className="dice--container">
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
          <Dice value="1" />
        </div>
      </div>
      <h3>marshal.rocks</h3>
    </main>
  );
}

export default App;
