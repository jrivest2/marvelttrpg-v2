import { useLoaderData } from "react-router-dom";
import BasicStats from "../../components/character-sheet/BasicStats";
import Character from "../../objectClasses/character";
import { useState } from 'react';
import { statsContext } from '../../components/context';


function CharacterSheet() {
    const { characterData } = useLoaderData();
    const [character, setCharacter] = useState(new Character(characterData));
    // let character = new Character(characterData);
    const [health, setHealth] = useState(character.health);
    const [focus, setFocus] = useState(character.focus);    

    const contextVals = [
        character,
        setCharacter
    ]

    
    return <div>
        <statsContext.Provider value={contextVals}>
            <div className="subtitle page-title">Character Sheet</div>
            <BasicStats />
            <hr />
            <p>{character.biography.history}</p>
        </statsContext.Provider>
    </div>
}

export default CharacterSheet;