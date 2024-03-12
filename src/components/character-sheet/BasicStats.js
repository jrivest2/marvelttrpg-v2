export default function BasicStats({character}) {
    const name = character.name;
    const rank = character.rank;
    
    let maxHealth = 0;
    let maxFocus = 0;

    if (character.resilience < 1) maxHealth = 10;
    else maxHealth = 30 * character.resilience;

    if (character.vigilance < 1) maxFocus = 10;
    else maxFocus = 30 * character.vigilance;

    return (

        <section className='hero'>
            <div className='hero-body'>
            <div>{character.name}</div>
            <div>Rank: {character.rank}</div>
            <img alt={character.id} src={character.image}/>
            <br />
            <div>Max Health: {maxHealth}</div>
            <div>Health: {maxHealth}</div>
            <br />
            <div>Max Focus: {maxFocus}</div>
            <div>Focus: {maxFocus}</div>
            </div>
        </section>
    );
};