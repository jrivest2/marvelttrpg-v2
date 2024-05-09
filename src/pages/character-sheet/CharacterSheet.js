import { useLoaderData } from "react-router-dom";
import BasicStats from "../../components/character-sheet/BasicStats/BasicStats";
import Character from "../../objectClasses/character";
import { useState } from 'react';
import { statsContext } from '../../components/context';
import AbilityScores from "../../components/character-sheet/AbilityScores";
import PowersSection from "../../components/character-sheet/Powers/PowersSection";
import Damage from "../../components/character-sheet/Damage";
import BasicActions from "../../components/character-sheet/BasicActions";
import TraitsTagsSection from "../../components/character-sheet/TraitsTags/TraitsTagsSections";
import Biography from "../../components/character-sheet/Biography/Biography";


function CharacterSheet() {
    const { characterData } = useLoaderData();
    const [character, setCharacter] = useState(new Character(characterData));
  
    const contextVals = [
        character,
        setCharacter
    ]
    
    return <div>
        <statsContext.Provider value={contextVals}>
            <div className="subtitle page-title">Character Sheet</div>
            <BasicStats />
            <AbilityScores />
            <br />
            <Damage />
            <hr />
            <BasicActions />
            <hr />
            <PowersSection />
            <hr />
            <TraitsTagsSection />
            <hr />
            <Biography />
            {/* <p>{character.biography.history}</p> */}
        </statsContext.Provider>
    </div>
}

export default CharacterSheet;