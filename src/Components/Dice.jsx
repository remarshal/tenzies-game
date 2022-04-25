import "../style.css"

const Dice = (props) => {
    return (
        <div className="dice">
                <h2>{props.value}</h2>
        </div>
    );
};

export default Dice;