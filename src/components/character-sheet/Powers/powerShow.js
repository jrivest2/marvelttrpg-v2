import { useContext } from "react";
import { statsContext } from "../../context";
import Power from "../../../objectClasses/power";
import Character from "../../../objectClasses/character";
import ClickRuleBasic from "../ClickRules/ClickRuleBasic";
import ClickRuleSplitTitlePartialClick from "../ClickRules/ClickRuleSplitTitlePartialClick";
import PowerClickBody from "./PowerClickBody";

export default function PowerShow({ power }) {

    const [character, setCharacter] = useContext(statsContext)

    const handleClick = () => {
        let newChar = new Character(character.getData())
        newChar.usePower(power)
        setCharacter(newChar)
    }

    const classNamePassive = "power passive";
    const classNameNormal = "power";
    const outputClassName = power.duration === "Permanent" ? classNamePassive : classNameNormal;
    
    const outputNoButton = <ClickRuleBasic title={power.name} titleClass={outputClassName}><PowerClickBody power={power}/></ClickRuleBasic>
    const outputWithButton = <ClickRuleSplitTitlePartialClick title={[power.name, <button onClick={handleClick}>Use Power: {power.cost}</button>]} titleClass={outputClassName}><PowerClickBody power={power}/></ClickRuleSplitTitlePartialClick>
    const outputVariedCost = <ClickRuleSplitTitlePartialClick title={[power.name, <button>Cost Varies</button>]} titleClass={outputClassName}><PowerClickBody power={power}/></ClickRuleSplitTitlePartialClick>


    const finalOutput = (power.cost === "?" || power.cost.includes("+")) ? outputVariedCost : parseInt(power.cost) ? outputWithButton : outputNoButton
    
    return finalOutput;
}