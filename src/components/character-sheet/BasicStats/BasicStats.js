import Character from "../../../objectClasses/character";
import TextBox from "../../TextBox";
import { useContext } from 'react';
import { statsContext } from '../../context'
import Speed from "./Speed";

export default function BasicStats() {

    const [character, setCharacter] = useContext(statsContext);


    const handleHealthSubmit = (value) => {
        let newChar = new Character(character.getData())
        newChar.changeHealth(parseInt(value))
        setCharacter(newChar)
    }
    
    const handleFocusSubmit = (value) => {
        let newChar = new Character(character.getData())
        newChar.changeFocus(parseInt(value))
        setCharacter(newChar)
    }

    const handleResetHealthClick = () => {
        let newChar = new Character(character.getData())
        newChar.resetHealth()
        setCharacter(newChar)

    }

    const handleResetFocusClick = () => {
        let newChar = new Character(character.getData())
        newChar.resetFocus()
        setCharacter(newChar)
    }

    const handleKarmaMinusClick = () => {
        let newChar = new Character(character.getData())
        newChar.setKarma(-1)
        setCharacter(newChar)
    }

    const handleKarmaPlusClick = () => {
        let newChar = new Character(character.getData())
        newChar.setKarma(1)
        setCharacter(newChar)
    }

    const handleKarmaResetClick = () => {
        let newChar = new Character(character.getData())
        newChar.resetKarma()
        setCharacter(newChar)
    }

    return (

        <section className='hero'>
            <div className='hero-body'>
                <div className="title">{character.name}</div>
                <div className="subtitle">Rank: {character.rank}</div>
                <img alt={character.id} src={character.image}/>
                <br />
                <div>Max Health: {character.maxHealth}</div>
                <div className='stats-input'>
                    Health: {character.health} + 
                    <TextBox onSubmit={handleHealthSubmit} />
                    <button onClick={handleResetHealthClick}>Reset Health</button>
                </div>
                <br />
                <div>Max Focus: {character.maxFocus}</div>
                <div className='stats-input'>
                    Focus: {character.focus} + 
                    <TextBox onSubmit={handleFocusSubmit} />
                    <button onClick={handleResetFocusClick}>Reset Focus</button>
                </div>
                <br />
                <div>Health Damage Reduction: -{character.healthDamageReduction}</div>
                <div>Focus Damage Reduction: -{character.focusDamageReduction}</div>
                <br />
                <div>Karma: <button onClick={handleKarmaMinusClick}>-</button> {character.karma} <button onClick={handleKarmaPlusClick}>+</button> <button onClick={handleKarmaResetClick} style={{"marginLeft": "15px"}}>Reset Karma</button></div>
                <br />
                <Speed />
                <br />
                <div>Initiative Modifier: +{character.initModifier} {character.initModifierEdge}</div>
            </div>
        </section>
    );
};