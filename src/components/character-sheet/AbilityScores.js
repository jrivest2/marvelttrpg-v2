import Character from "../../objectClasses/character";
import { useContext } from 'react';
import { statsContext } from '../context'

export default function AbilityScores() {
    const [character, setCharacter] = useContext(statsContext);


    return (
        <section className="hero is-danger">
            <div className="hero-body">

                <div className="title">Ability Scores</div>
                <div>Melee: {character.melee}</div>
                <div>Melee Defense: {character.mDefense}</div>
                <div>Non-Combat Modifier: +{character.mNonCombat}</div>
                <br />
                
                <div>Agility: {character.agility}</div>
                <div>Agility Defense: {character.aDefense}</div>
                <div>Non-Combat Modifier: +{character.aNonCombat}</div>
                <br />

                <div>Resilience: {character.resilience}</div>
                <div>Resilience Defense: {character.rDefense}</div>
                <div>Non-Combat Modifier: +{character.rNonCombat}</div>
                <br />

                <div>Vigilance: {character.vigilance}</div>
                <div>Vigilance Defense: {character.vDefense}</div>
                <div>Non-Combat Modifier: +{character.vNonCombat}</div>
                <br />

                <div>Ego: {character.ego}</div>
                <div>Ego Defense: {character.eDefense}</div>
                <div>Non-Combat Modifier: +{character.eNonCombat}</div>
                <br />

                <div>Logic: {character.logic}</div>
                <div>Logic Defense: {character.lDefense}</div>
                <div>Non-Combat Modifier: +{character.lNonCombat}</div>
            </div>
        </section>
    )
}