import ClickRuleBasic from "./ClickRules/ClickRuleBasic";

export default function BasicActions() {

    return (
        <div>
            <div className="title">Basic Actions</div>
            <ClickRuleBasic title={<b>Standard Actions</b>}>
                <div>
                    <p>Each character gets one standard action every turn. They can take that action at any point before, during, or after their movement action.</p>
                    <p>Standard Actions:</p>
                    <ClickRuleBasic title={"Attack"} titleClass={"basic-actions-title"}>
                        <div>
                            <p>There are two different kinds of attacks: close combat and ranged combat. Close attacks are made with fists and handheld weapons. Ranged attacks are made with guns and bows and many kinds of powers.</p>
                            <p>For a close attack, the target must be within the attacker's <i>reach</i>. For average-sized characters, that's 1 space. The attacker makes a Melee check against their target's Melee defense. If the attack succeeds, it inflicts the attacker's Melee damage on the target, including the effects of any weapons or powers used. On a Fantastic success, double the damage.</p>
                            <p>You don't need a weapon to make a close attack, but they can help. Details on weapons appear later in this chapter.</p>
                            <p>For a ranged attack, the target must be within the attacker's line of sight and double the weapon's listed range. Most of the time, the attacker makes an Agility check against the target's Agility defense. If the attack succeeds, it inflicts the attacker's Agility damage on the target, including the effects of any weapons or powers used. On a Fantastic success, double the damage.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Dodge"} titleClass={"basic-actions-title"}>
                        <div>The character actively dodges to avoid incoming attacks. Any attacks against the character have trouble until the character's next turn—or the end of the next round at the latest.</div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Escape"} titleClass={"basic-actions-title"}>
                        <div>
                            <p>If the character is grabbed or pinned by another character, they can attempt to break free. They make a Melee check against the grabber's Melee defense. If they succeed, they free themselves and can then use the rest of their turn normally.</p>
                            <p>This works the same way if a character tries to free someone else who is grabbed or pinned. They make a Melee check against the opponent's Melee defense. If they succeed, The trapped character is freed.</p>
                            <p>A character can also attempt to free themselves or someone else from being pinned or paralyzed by something physical. The Narrator sets the target number for such attempts. Common target numbers include 20 for webbing chains and 16 for ropes.</p>
                            <p>Example: <i>Kraven the Hunter is trapped in Spider-Man's webbing. He must make a Melee check against a target number of 20 to escape.</i></p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Grab"} titleClass={"basic-actions-title"}>
                        <div>
                            <p>If the character wants to get a hold on an unwilling target—like a foe—they need to grab them. To do this, they make a Melee check against the target's Melee defense. If they succeed, they grab the target. On a Fantastic success, the target is pinned as well.</p>
                            <p>Neither the grabbed character nor the grabber can move unless they can carry the other person with them, The grabber can let go at any time, but the grabbed character must escape to be free.</p>
                            <p>A pinned character has trouble on Melee and Agility action checks and cannot move at all.</p>
                            <p>Anyone making an attack against an entangled character has trouble. If the attack against the intended target fails, compare the same attack check against the other target's Agility defense to see if it hits them instead.</p>
                            <p>If the attacker doesn't care who gets hit, the attacker has an edge on their check. If the result is high enough to hit one of the targets but not the other, that's who it hits, if it's high enough to hit either of them, determine the actual target randomly.</p>
                            <p>Example: <i>Baron Zemo pins Captain America. Crossbones tries to shoot at Captain America. He rolls 2 3 3, which adds up to 8, plus his Agility of 5, which totals 13. That misses Captain America, as it is less than Captain America's Agility defense of 14. Crossbones then compares his result against Baron Zemo's Agility defense of 13. That's a hit!</i></p>
                            <p><i>The Red Skull opens fire at Captain America too, but he doesn't care if he hits either of the two entangled characters. He gets an edge on the attack, and his total result is 15. That's enough to hit either target, so he rolls a die, stating that an even number hits Captain America and an odd number hits Baron Zemo. He gets a 3, which means Baron Zemo is having a rotten day.</i></p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Help"} titleClass={"basic-actions-title"}>
                        <div>    
                            <p>The character does something—which their player should describe—to help out a target character. That target character gets an edge on their next action, as long as it happens before the aiding character's next turn—or the end of the next round at the latest.</p>
                            <p>The character can even pick themselves as the target character, helping themselves out by preparing for their next action.</p>
                            <p>Example: <i>Hawkeye (Kate Bishop) and Captain Marvel (Carol Danvers) are fighting Thanos. Hawkeye would have a hard time hurting Thanos on her own, so she decides to start shouting ridiculous insults at Thanos to distract him. This gives Captain Marvel an edge when she tries to punch Thanos.</i></p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Move"} titleClass={"basic-actions-title"}>
                        <p>If the character likes, they can use their standard action to move, just like they would with a movement action. This way they can move twice in a single turn, which represents them putting their energy into an all-out sprint.</p>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Use a Power"} titleClass={"basic-actions-title"}>
                        <p>Many powers require an action to activate. The description of the power tells you what kind of action is necessary: either standard, movement or reaction.</p>
                    </ClickRuleBasic>
                </div>
            </ClickRuleBasic>
            <ClickRuleBasic title={<b>Reactions</b>}>
                <div>
                    <p>Each character gets one reaction every turn, which they can use when something happens that could trigger a particular reaction.</p>
                    <p>Many powers can be used with a reaction. In fact, some of them can <i>only</i> be used with a reaction. The triggers for these powers are listed in the power descriptions.</p>
                    <p>Common Reactions (excluding specific powers):</p>
                    <ClickRuleBasic title={"Escape"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b> The character has been grabbed, pinned or paralyzed by something physical.</p>
                            <p><b>Effect:</b> The character can attempt to escape (just like they could with a standard action).</p>
                            <p>If the character is grabbed or pinned by another character, they can attempt to break free. They make a Melee check against the grabber's Melee defense. If they succeed, they free themselves and can then use the rest of their turn normally.</p>
                            <p>This works the same way if a character tries to free someone else who is grabbed or pinned. They make a Melee check against the opponent's Melee defense. If they succeed, The trapped character is freed.</p>
                            <p>A character can also attempt to free themselves or someone else from being pinned or paralyzed by something physical. The Narrator sets the target number for such attempts. Common target numbers include 20 for webbing chains and 16 for ropes.</p>
                            <p>Example: <i>Kraven the Hunter is trapped in Spider-Man's webbing. He must make a Melee check against a target number of 20 to escape.</i></p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Fastball Special"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b> An ally throws or fires the character at an enemy, and the ally succeeds at their Agility check.</p>
                            <p><b>Effect:</b> The character makes a close attack at the enemy they were thrown or fired at. If the attack is a success, the enemy takes double damage. If the attack is a Fantastic success, the enemy takes triple damage.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Help Teammate"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b> A teammate (someone on the same team as the character, as listed on their character sheets) fails an action check.</p>
                            <p><b>Effect:</b> The teammate gains an edge on that action check.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Interpose"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b> Someone within the character's reach is the target of an attack that does not also target the character.</p>
                            <p><b>Effect:</b> The character moves (for free) to stand between the target and the attacker, becoming the new target of the attack. The attacker's TN for the attack is the lower of the character's defense or the original target's defense.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Ram"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b> The character moves their full speed in a straight line toward a target and then uses their standard action for additional movement to move right up to the target.</p>
                            <p><b>Effect: </b> The character can now use their reaction to make a close attack against the enemy they moved up to. If the attack is a success, the character takes regular damage from the impact, and the enemy takes double damage. If the attack is a Fantastic success, the character takes regular damage still, but the enemy takes triple damage instead and is knocked prone.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Release"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b> Something the character is grabbing moves or attacks.</p>
                            <p><b>Effect: </b> The character can release what they are grabbing.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Skulk"} titleClass={"basic-actions-title"}>
                        <div>
                            <p><b>Trigger:</b>The character is a target of a ranged attack, and someone within their reach is not a target of that attack.</p>
                            <p><b>Effect:</b> The character moves (for free) behind the nearby person, and that person becomes the new target of the attack. The attacker's TN for the attack is the lower of the character's defense or the new target's defense.</p>
                        </div>
                    </ClickRuleBasic>
                    <br></br>
                    <p><i>Anyone can perform the reactions listed above.</i></p>
                </div>
            </ClickRuleBasic>
            <ClickRuleBasic title={<b>Movement Actions</b>}>
                <div>
                    <p>Each character gets one movement action every turn.</p>
                    <p>A character can take their standard action at any point before, during, or after their movement action.</p>
                    <p>Some powers require a movement action to use. This is listed in the power's description.</p>
                    <p>When a character moves, they can travel a distance up to their listed speed with that mode of movement. Every character automatically has running, jumping, swimming, and climbing as potential movement modes. Powers and traits can give them additional modes.</p>
                    <ClickRuleBasic title={"Basic Speeds"} titleClass={"basic-actions-title"}>
                        <div>
                            <p className="subtitle"><b>Basic Speeds</b></p>
                            <p>A character's Run Speed is 5 spaces, plus 1 space for each 5 points they have in Agility.</p>
                            <p>A character's Climb Speed, Jump Speed and Swim Speed are half their Run Speed. The Jump Speed only applies to horizontal jumps—unless the character has the Jump power, which can be used for vertical jumps as well.</p>
                            <p>Other speeds are listed in the descriptions of the powers that grant them. They are often based on the Run Speed. Powers that affect Run Speed (or any other speeds) do not stack. Instead, use the one that offers the greater benefit.</p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Combining Modes"} titleClass={"basic-actions-title"}>
                        <p>Characters can combine two or more modes of travel in the same movement action. For instance, if they begin their turn underwater, they could swim to the surface and then fly to a nearby building. When combining two or more modes of travel, a character must use whichever mode has the lowest speed for them as their overall speed for that movement action.</p> 
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Gliding*"} titleClass={"basic-actions-title"}>
                        <div>
                            <p>The character can glide at their listed Glide Speed. At the end of a turn in which they glide, they lose altitude equal to half of their Glide Speed.</p>
                            <p><i>*Characters can only Glide if they have a power allowing them to do so.</i></p>
                        </div>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Swinglining*"} titleClass={"basic-actions-title"}>
                        <p>Swinglining consists of swinging from place to place on a series of lines, like Spider-Man does on his webs. A character can swingline at their listed Swingline Speed.</p>
                        <p>A character's Swingline Speed is also the swingline's reach. The character must be within their swingline's reach of an anchor—something to which the swingline can attach—to continue swinglining. Otherwise, they fall at the end of their turn.</p>
                        <p><i>*Characters can only Swingline if they have a power allowing them to do so.</i></p>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Teleporting*"} titleClass={"basic-actions-title"}>
                        <p>The character can teleport between any two open points, as described in the power they use to teleport. If they end their teleportation in thin air, they fall at the end of their turn.</p>
                        <p><i>*Characters can only Teleport if they have a power allowing them to do so.</i></p>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Lifting and Carrying"} titleClass={"basic-actions-title"}>
                        <p>A character can pick up anything their own size or smaller, and they can carry, swing or throw it. With a successful Challenging Melee check, they can lift something one step larger than they normally can, but they cannot carry, swing or throw it.</p>
                        <p>Carrying something smaller than the character's size does not affect their movement. Carrying something their own size cuts their movement in half. Characters cannot normally carry something larger than their own size.</p>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Sneaking/Hiding"} titleClass={"basic-actions-title"}>
                        <p>A character who doesn't want to be observed while moving can sneak or hide. Moving while sneaking cuts their speed in half.</p>
                        <p>Anyone who might be able to spot the character can make a Vigilance check against the character's Agility defense. A success means the character is spotted.</p>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Towing"} titleClass={"basic-actions-title"}>
                        <p>Sometimes a character grabs or pins a target at the end of a length of line like a rope, a chain or a webline. When this happens the character can move toward the target, or the target can move toward the character with their movement action.</p>
                        <p>If either attached character is strong enough to carry the other, they can use the line to tow the other character during their own movement action. They can also reel the other character toward them on the line, narrowing the distance up to the towing character's speed.</p>
                        <p>Using a standard action, either character can use the line to throw the other—if they are strong enough to throw them—up to their normal range. If the thrown character lands within the length of the line, they remain grabbed/pinned. Otherwise, the throwing character must release the line if they can. If they can't, the maximum range of the throw is the length of the line.</p>
                        <p>If the target is strong enough to carry the character, they can use their movement action to move away from the character. The character must release the line with their reaction—if they can—or be towed by the target.</p>
                        <p>Other characters do not suffer trouble when attacking the attached characters, unless the two characters are in adjacent spaces.</p>
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Terrain"} titleClass={"basic-actions-title"}>
                        <p>The basic movement speeds assume the character is moving through an open area. Things like running through a swamp, a thick forest or an alley full of trash cans slow a character down. Such challenging landscapes are called <i>difficult terrain</i>.</p>
                        <p>When a character moves through difficult terrain, their movement costs 2 spaces rather than the usual 1 space. If a character doesn't have enough movement left to move into a space, they must stay where they are.</p>
                        <p>Characters that can fly or otherwise move above difficult terrain are not affected by it.</p>
                        <p><b>Example:</b></p> 
                        <p><i>Luke Cage has a Run Speed of 5 and uses his movement action to run through a swamp. Moving through the swamp costs 2 spaces of movement for each space moved, so he can move 2 spaces for 4 spaces of movement. He doesn't have enough movement left to get into the next space, so he has to stay where he is.</i></p>
                        <p><i>Jessica Jones can fly over the swamp, so it doesn't affect her Flight Speed at all.</i></p>                       
                    </ClickRuleBasic>
                    <ClickRuleBasic title={"Falling Prone"} titleClass={"basic-actions-title"}>
                        <p>While a character is prone (on the ground), they have trouble on all Melee attacks. People making close attacks against them have an edge.</p>
                        <p>Ranged attacks against a prone character have trouble. It costs a prone character 1 space of movement to stand up. A prone character can crawl (move while prone). This is treated like moving over difficult terrain (check the Terrain description).</p>
                    </ClickRuleBasic>
                </div>
            </ClickRuleBasic>
        </div>
    );
}