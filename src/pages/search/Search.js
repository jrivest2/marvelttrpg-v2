import { useLoaderData } from "react-router-dom";
import CharacterTitleCard from "../../components/character-selection/CharacterTitleCard";

function Search() {
    const {searchResults} = useLoaderData();

    const renderedResults = searchResults.map((character) => {
        return <CharacterTitleCard character={character} key={character.name} />
    });

    return <div>
        <h1 className="subtitle page-title">Character Select</h1>
        <div className="character-select">{renderedResults}</div>
    </div>
}

export default Search;