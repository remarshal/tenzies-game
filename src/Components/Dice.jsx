import "../style.css"

const Dice = (props) => {
    return (
        <div className={props.isHeld ? "dice--held" : "dice"} onClick={props.holdDice}>
                <h2>{props.value}</h2>
        </div>
    );
};

export default Dice;