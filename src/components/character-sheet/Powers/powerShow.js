import { useContext } from "react";
import { statsContext } from "../../context";
import Power from "../../../objectClasses/power";
import Character from "../../../objectClasses/character";

export default function PowerShow({ power }) {

    const [character, setCharacter] = useContext(statsContext)

    const handleClick = () => {
        let newChar = new Character(character.getData())
        newChar.usePower(power)
        setCharacter(newChar)
    }

    const classNamePassive = "power passive";
    const classNameNormal = "power";
    const outputClassName = power.duration == "Permanent" ? classNamePassive : classNameNormal;

    
    const outputNoButton = <div className={outputClassName}>{power.name}</div>
    const outputWithButton = <div className={outputClassName}>{power.name} <button onClick={handleClick}>Use Power: {power.cost}</button></div>
    const outputVariedCost = <div className={outputClassName}>{power.name} <button>Cost Varies</button></div>

    if (power.cost === "?" || power.cost.includes("+")) {
        return outputVariedCost;
    }
    else if (parseInt(power.cost)) {
        return outputWithButton;
    }
    else {
        return outputNoButton;
    }
}