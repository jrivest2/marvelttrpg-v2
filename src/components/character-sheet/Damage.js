import { useContext } from "react";
import { statsContext } from "../context";

export default function Damage() {
    const [character, setCharacter] = useContext(statsContext);

    return (
        <div>
            <div className="title">Damage</div>
            <div className="damageCalculation">Melee: dMarvel * {character.meleeDamageMultiplier} + {character.meleeDamageModifier}</div>
            <div className="damageCalculation">Agility: dMarvel * {character.agilityDamageMultiplier} + {character.agilityDamageModifier}</div>
            <div className="damageCalculation">Ego: dMarvel * {character.egoDamageMultiplier} + {character.egoDamageModifier}</div>
            <div className="damageCalculation">Logic: dMarvel * {character.logicDamageMultiplier} + {character.logicDamageModifier}</div>

        </div>
    );
}