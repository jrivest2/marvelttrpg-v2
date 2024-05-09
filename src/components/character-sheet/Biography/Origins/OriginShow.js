import ClickRuleBasic from "../../ClickRules/ClickRuleBasic";
import OriginClickBody from "./OriginClickBody";

export default function OriginShow({origin}) {
    return <ClickRuleBasic title={origin.name} titleClass={"origin"}><OriginClickBody origin={origin} /></ClickRuleBasic>;
}