import characterFile from '../../Data-Files/character-profiles.json'

function searchLoader({ request }) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term');

    const characterArrayEmptyTerm = characterFile.filter((characters => characters.name != ""))
  
    const characterArray = characterFile.filter((characters => characters.name.toLowerCase().includes(term.toLowerCase())))

      if (characterArray.length < 1) {
      alert("No characters matched that search! Please try again.")
      return { searchResults: characterArrayEmptyTerm };
    }
   
    return {
        searchResults: term ? characterArray : characterArrayEmptyTerm
    };
  }

  export default searchLoader;