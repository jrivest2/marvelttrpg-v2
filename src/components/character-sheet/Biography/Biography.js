import { useContext } from "react";
import { statsContext } from "../../context";
import OccupationShow from "./Occupations/OccupationShow";
import OriginShow from "./Origins/OriginShow";

export default function Biography() {

    const [character, setCharacter] = useContext(statsContext)

    const occupationsOutput = character.occupation.map((occupation, index) => {
        return <OccupationShow occupation={occupation} key={index} />
    });
    const occupationTitle = occupationsOutput.length > 1 ? "Occupations" : "Occupation";
    
    const originsOutput = character.origin.map((origin, index) => {
        return <OriginShow origin={origin} key={index} />
    });

    const originTitle = originsOutput.length > 1 ? "Origins" : "Origin";
    return (
        <div className="bio-section">
            <div className="title">Biography</div>
            <div className="bio-name"><b>Real Name</b>: {character.biography.name}</div>
            <div className="bio-grid">
                <div className="bio-gender"><b>Gender</b>: {character.biography.gender}</div>
                <div className="bio-height"><b>Height</b>: {character.biography.height}</div>
                <div className="bio-eyes"><b>Eyes</b>: {character.biography.eyes}</div>
                <div className="bio-weight"><b>Weight</b>: {character.biography.weight}</div>
                <div className="bio-hair"><b>Hair</b>: {character.biography.hair}</div>
                <div className="bio-size"><b>Size</b>: {character.biography.size}</div>
            </div>
            
            {character.biography.features && <div className="bio-features"><b>Distinguishing Features</b>: {character.biography.features}</div>}
            
            <div className="occupation-section">
                <div className="occupation-section-title"><b>{occupationTitle}</b>:</div>
                <div>{occupationsOutput}</div>
            </div>
            <div className="origin-section">
                <div className="origin-section-title"><b>{originTitle}</b>:</div>
                <div>{originsOutput}</div>
            </div>

            <div className="bio-teams"><b>Teams</b>: {character.biography.teams}</div>
            <div className="bio-base"><b>Base</b>: {character.biography.base}</div>
            <div className="bio-history"><b>History</b>: {character.biography.history}</div>
            <div className="bio-personality"><b>Personality</b>: {character.biography.personality}</div>

        </div>
    );
}