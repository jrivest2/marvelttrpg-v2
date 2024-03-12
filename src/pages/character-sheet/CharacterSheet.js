import { useLoaderData } from "react-router-dom";
import BasicStats from "../../components/character-sheet/BasicStats";

function CharacterSheet() {
    const { character } = useLoaderData();
    return <div>
        <div className="subtitle page-title">Character Sheet</div>
        <BasicStats character={character} />
        <p>{character.biography.history}</p>
    </div>
}

export default CharacterSheet;