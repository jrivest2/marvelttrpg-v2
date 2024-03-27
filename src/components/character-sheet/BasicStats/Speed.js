import { useContext } from "react";
import { statsContext } from "../../context";
import Character from "../../../objectClasses/character";

export default function Speed() {
    const [character, setCharacter] = useContext(statsContext);
    
    const outputTitles = {
        "runSpeed": "Run",
        "climbSpeed": "Climb",
        "jumpSpeed": "Jump",
        "nonCombatJumpSpeed": "Non-Combat Jump",
        "swimSpeed": "Swim",
        "flightSpeed": "Flight",
        "nonCombatFlightSpeed": "Non-Combat Flight",
        "swingSpeed": "SwingLine",
        "glideSpeed": "Glide",
        "levitateSpeed": "Levitate"
    }

    const speeds = Object.entries(character.getSpeeds()).map( (SpeedSet) => {
        const [title, value] = SpeedSet;
        if (value > 0 )return <div>{outputTitles[title]}: {value}</div>
        else return null;
    });

    

    return (
        <div className="Speed-section">
            <div className="subtitle">Speed</div>
            <div>{speeds}</div>
        </div>
    )
}