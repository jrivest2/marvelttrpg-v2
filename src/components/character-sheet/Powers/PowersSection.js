import { useContext } from "react";
import { statsContext } from "../../context";
import PowerSet from "../../../objectClasses/powerSet";
import PowerSetShow from "./PowerSetShow";

export default function PowersSection() {
    const [character, setCharacter] = useContext(statsContext);
    const outputPowerSets = character.powerSets.map((powerSet, index) => {
        return <PowerSetShow powerSet={powerSet} key={index} />
    })


    return (

        <div className="powers-section">
            <div className="title">Powers</div>
            <div>{outputPowerSets}</div>
        </div>
    );
}