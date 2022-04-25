import "./style.css";
import Dice from "./Components/Dice";

function App() {
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
