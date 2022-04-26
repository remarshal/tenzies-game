import "../style.css"

const Dice = (props) => {
    return (
        <div className={props.isHeld ? "dice--held" : "dice"}>
                <h2>{props.value}</h2>
        </div>
    );
};

export default Dice;