import { useState } from "react";
// import Character from "../../objectClasses/character";
import TextBox from "../TextBox";
import { useContext } from 'react';
import { statsContext } from '../context'

export default function BasicStats({character}) {

    const [health, setHealth, focus, setFocus] = useContext(statsContext);
    
    // const [focus, setFocus] = useState(character.focus);
    // const [health, setHealth] = useState(character.health);
    
    const handleHealthSubmit = (value) => {
        character.changeHealth(parseInt(value))
        setHealth(character.health)
    }

    const handleFocusSubmit = (value) => {
        character.changeFocus(parseInt(value))
        setFocus(character.focus)
    }

    const handleResetHealthClick = () => {
        character.resetHealth()
        setHealth(character.health)
    }

    const handleResetFocusClick = () => {
        character.resetFocus()
        setFocus(character.focus)
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
                Health: {health} + 
                <TextBox onSubmit={handleHealthSubmit} />
                <button onClick={handleResetHealthClick}>Reset Health</button>
            </div>
            <br />
            <div>Max Focus: {character.maxFocus}</div>
            <div className='stats-input'>
                Focus: {focus} + 
                <TextBox onSubmit={handleFocusSubmit} />
                <button onClick={handleResetFocusClick}>Reset Focus</button>
            </div>
            </div>
        </section>
    );
};