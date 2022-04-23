import '../style.css';
import Dice from './Dice';

function Main() {
    return (
        <div className="app">
            <div className="container">
                <h1>Tenzies Game</h1>
                <Dice />
            </div>
        </div>
    )
}

export default Main;
