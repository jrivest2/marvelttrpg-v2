import ClickRuleBasic from "../ClickRules/ClickRuleBasic";
import TagClickBody from "./TagClickBody";

export default function TagShow({tag}) {
    return <ClickRuleBasic title={tag.name} titleClass={"marvel-tag"}><TagClickBody tag={tag} /></ClickRuleBasic>
}