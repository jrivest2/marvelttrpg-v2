import { useLoaderData } from "react-router-dom";

function CharacterSheet() {
    const { character } = useLoaderData();
    console.log(character)
    return <div>
        <div className="subtitle page-title">Character Sheet</div>
        <div>{character.name}</div>
        <div>Rank: {character.rank}</div>
        <img alt={character.id} src={character.image}/>
        <p>{character.biography.history}</p>
    </div>
}

export default CharacterSheet;