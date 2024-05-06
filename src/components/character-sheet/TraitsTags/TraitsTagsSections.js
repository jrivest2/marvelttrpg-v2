import { useContext } from "react";
import { statsContext } from "../../context";
import TraitShow from "./TraitShow";
import TagShow from "./TagShow";

export default function TraitsTagsSection() {
    const [character, setCharacter] = useContext(statsContext);

    console.log(character.traits)

    const traitsOutput = character.traits.map((trait, index) => {
        return <TraitShow trait={trait} key={index} />
    });
    const tagsOutput = character.tags.map((tag, index) => {return <TagShow tag={tag} key={index} />});

    return (
        <>
            <div className="title">Traits</div>
            <div>{traitsOutput}</div>
            <br />
            <div className="title">Tags</div>
            <div>{tagsOutput}</div>
        </>
    );
}