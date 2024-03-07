import { Link } from "react-router-dom";

function CharacterTitleCard({ character }) {

    return (
        <div className="column is-4">
            <Link to={`/characters/${character.id}`} >
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-1by1">
                            <img src={character.image} alt={character.name} style={{width: '500px', alignSelf: "center"}} />
                        </figure>
                    </div>

                    <div className="card=content" >
                        <div className="media-content">
                            <p className="title is-4">{character.name}</p>
                            <p className="subtitle is-6">Rank: {character.rank}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CharacterTitleCard;