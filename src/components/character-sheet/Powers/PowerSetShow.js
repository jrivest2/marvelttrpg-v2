import { useContext } from "react";
import { statsContext } from "../../context";
import PowerSet from "../../../objectClasses/powerSet";
import PowerShow from "./powerShow";

export default function PowerSetShow({ powerSet }) {
    const [character, setCharacter] = useContext(statsContext)
    const outputPowers = powerSet.powers.map((power, index) => {
        return <PowerShow power={power} key={index} />
    })
    return (
        <div>
            <div className="power-set">{powerSet.name}</div>
            <div>{outputPowers}</div>
            <br />
        </div>
    );
}