import { useLoaderData } from "react-router-dom";
import BasicStats from "../../components/character-sheet/BasicStats";
import Character from "../../objectClasses/character";

function CharacterSheet() {
    const { characterData } = useLoaderData();
    let character = new Character(characterData);

    return <div>
        <div className="subtitle page-title">Character Sheet</div>
        <BasicStats character={character} />
        <hr />
        <p>{character.biography.history}</p>
    </div>
}

export default CharacterSheet;