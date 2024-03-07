import characterFile from '../Data-Files/character-profiles.json'
import CharacterTitleCard from '../components/character-selection/CharacterTitleCard'

function CharacterSelect() {
    const characterArray = characterFile.filter((characters => characters.name != ""))

    const renderedResults = characterArray.map((character) => {
        return <CharacterTitleCard character={character} key={character.name} />
    })


    return <div>
        <h1 className='subtitle'>Character Select</h1>
        <div className='character-select'>{renderedResults}</div>
    </div>
}

export default CharacterSelect;