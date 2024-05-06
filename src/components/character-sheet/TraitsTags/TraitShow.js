import ClickRuleBasic from "../ClickRules/ClickRuleBasic";
import TraitClickBody from "./TraitClickBody";

export default function TraitShow({trait}) {

    return (
        <ClickRuleBasic title={trait.name} titleClass={"trait"}><TraitClickBody trait={trait} /></ClickRuleBasic>
    );
}