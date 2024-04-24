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
                    <div><b className="ability-title">Melee</b>: {character.melee} {character.meleeEdge}</div>
                    <div>Melee Defense: {character.mDefense}</div>
                    <div>Non-Combat Modifier: +{character.mNonCombat} {character.meleeEdge}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Agility</b>: {character.agility} {character.agilityEdge}</div>
                    <div>Agility Defense: {character.aDefense}</div>
                    <div>Non-Combat Modifier: +{character.aNonCombat} {character.agilityEdge}</div>
                    <br />
                </div>
                
                <div className="ability-score">
                    <div><b className="ability-title">Resilience</b>: {character.resilience} {character.resilienceEdge}</div>
                    <div>Resilience Defense: {character.rDefense}</div>
                    <div>Non-Combat Modifier: +{character.rNonCombat} {character.resilienceEdge}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Vigilance</b>: {character.vigilance} {character.vigilanceEdge}</div>
                    <div>Vigilance Defense: {character.vDefense}</div>
                    <div>Non-Combat Modifier: +{character.vNonCombat} {character.vigilanceEdge}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Ego</b>: {character.ego} {character.egoEdge}</div>
                    <div>Ego Defense: {character.eDefense}</div>
                    <div>Non-Combat Modifier: +{character.eNonCombat} {character.egoEdge}</div>
                    <br />
                </div>

                <div className="ability-score">
                    <div><b className="ability-title">Logic</b>: {character.logic} {character.logicEdge}</div>
                    <div>Logic Defense: {character.lDefense}</div>
                    <div>Non-Combat Modifier: +{character.lNonCombat} {character.logicEdge}</div>
                </div>
            </div>
        </section>
    )
}