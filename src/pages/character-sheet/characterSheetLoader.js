import characterFile from '../../Data-Files/character-profiles.json'

function characterSheetLoader({params}) {
    const { id } = params;

    if (!id) {
        throw new Error('Character ID Must be provided')
    }

    const character = characterFile.filter((loadCharacter) => loadCharacter.id == id)[0];
    
    return {
        character
    }
}

export default characterSheetLoader;