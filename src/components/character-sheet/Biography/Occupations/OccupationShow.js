import ClickRuleBasic from "../../ClickRules/ClickRuleBasic";
import OccupationClickBody from "./OccupationClickBody";

export default function OccupationShow({occupation}) {
    return <ClickRuleBasic title={occupation.name} titleClass={"occupation"}><OccupationClickBody occupation={occupation} /></ClickRuleBasic>
}