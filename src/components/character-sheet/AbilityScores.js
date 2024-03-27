import Character from "../../objectClasses/character";
import { useContext } from 'react';
import { statsContext } from '../context'

export default function AbilityScores() {
    const [character, setCharacter] = useContext(statsContext);


    return (
        <section className="hero is-danger">
            <div className="hero-body">

                <div className="title">Ability Scores</div>
                <div className="ability-score">
                    <div><b>Melee</b>: {character.melee}</div>
                    <div>Melee Defense: {character.mDefense}</div>
                    <div>Non-Combat Modifier: +{character.mNonCombat}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Agility</b>: {character.agility}</div>
                    <div>Agility Defense: {character.aDefense}</div>
                    <div>Non-Combat Modifier: +{character.aNonCombat}</div>
                    <br />
                </div>
                
                <div className="ability-score">
                    <div><b className="ability-title">Resilience</b>: {character.resilience}</div>
                    <div>Resilience Defense: {character.rDefense}</div>
                    <div>Non-Combat Modifier: +{character.rNonCombat}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Vigilance</b>: {character.vigilance}</div>
                    <div>Vigilance Defense: {character.vDefense}</div>
                    <div>Non-Combat Modifier: +{character.vNonCombat}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Ego</b>: {character.ego}</div>
                    <div>Ego Defense: {character.eDefense}</div>
                    <div>Non-Combat Modifier: +{character.eNonCombat}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Logic</b>: {character.logic}</div>
                    <div>Logic Defense: {character.lDefense}</div>
                    <div>Non-Combat Modifier: +{character.lNonCombat}</div>
                </div>
            </div>
        </section>
    )
}