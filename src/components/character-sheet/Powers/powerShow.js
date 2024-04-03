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
    const outputNoButton = <div className="power">{power.name}</div>
    const outputWithButton = <div className="power">{power.name} <button onClick={handleClick}>Use Power</button></div>
    return parseInt(power.cost) ? outputWithButton : outputNoButton
}