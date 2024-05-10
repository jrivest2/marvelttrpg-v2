import Character from "../../../objectClasses/character";
import TextBox from "../../TextBox";
import { useContext } from 'react';
import { statsContext } from '../../context'
import Speed from "./Speed";
import ClickRuleSplitTitle from "../ClickRules/ClickRuleSplitTitle";
import ClickRuleBasic from "../ClickRules/ClickRuleBasic";
import ClickRuleMultipleInputs from "../ClickRules/ClickRuleMultipleInputs";
import ClickRuleSplitTitlePartialClick from "../ClickRules/ClickRuleSplitTitlePartialClick";

export default function BasicStats() {

    const [character, setCharacter] = useContext(statsContext);


    const handleHealthSubmit = (value) => {
        let newChar = new Character(character.getData())
        newChar.changeHealth(parseInt(value))
        setCharacter(newChar)
    }
    
    const handleFocusSubmit = (value) => {
        let newChar = new Character(character.getData())
        newChar.changeFocus(parseInt(value))
        setCharacter(newChar)
    }

    const handleResetHealthClick = () => {
        let newChar = new Character(character.getData())
        newChar.resetHealth()
        setCharacter(newChar)

    }

    const handleResetFocusClick = () => {
        let newChar = new Character(character.getData())
        newChar.resetFocus()
        setCharacter(newChar)
    }

    const handleKarmaMinusClick = () => {
        let newChar = new Character(character.getData())
        newChar.setKarma(-1)
        setCharacter(newChar)
    }

    const handleKarmaPlusClick = () => {
        let newChar = new Character(character.getData())
        newChar.setKarma(1)
        setCharacter(newChar)
    }

    const handleKarmaResetClick = () => {
        let newChar = new Character(character.getData())
        newChar.resetKarma()
        setCharacter(newChar)
    }

    return (

        <section className='hero'>
            <div className='hero-body'>
                <div className="title">{character.name}</div>
                <ClickRuleSplitTitle title={["Rank", character.rank]} titleClassName={"subtitle"}>
                    <div>
                        <div className="title">Rank</div>
                        <div>A character's <i>rank</i> measures their training and raw power. It also determines how many points a player can spend on ability scores and how many power sets, powers and traits a hero can pick.</div>
                        <div>As you play your character, their rank <i>can</i> increase over time, allowing the character to improve. Much of the time, though, a character's rank doesn't change.</div>
                        <div>Most of the characters in the Marvel Multiverse have a rank between 1 and 6. Your original character doesn't have to begin at the lowest rank, and most of them are unlikely to reach such high ranks where they focus on galactic issues rather than ones on Earth. If you're creating a new hero, your Narrator can help you figure out what rank to start at and what your character's rank cap might be.</div>
                        <div>If your Narrator is planning a campaign in which you play young S.H.I.E.L.D operatives, you might start at Rank 1, but if you're going to join the Avengers to fight off a Skrull invasion, you might start at Rank 4,5, or even 6. Sometimes the Narrator might even assign different ranks to heroes in your player group to emulate teams like the Avengers, which often feature heroes with a wide range of ranks.</div>
                        <div>Here are some rank benchmarks.</div>
                        <ul>
                            <li><ClickRuleBasic title={<b>Rank 1—Rookie</b>}><div>This is where most normal people rank. If you're a super hero, you're just getting started and are maybe playing through your origin story. Not long ago, you thought you were a normal person, but now things are changing fast.</div></ClickRuleBasic></li>
                            <li><ClickRuleBasic title={<b>Rank 2—Protector</b>}><div>You're a street-level hero who protects a neighborhood—just like Daredevil guards Hell's Kitchen. You could join a team like the Defenders to protect a city.</div></ClickRuleBasic></li>
                            <li><ClickRuleBasic title={<b>Rank 3—Champion</b>}><div>You're a formidable super hero. You could protect a city—like Ms. Marvel (Kamala Khan) protects Jersey City—or join a nationally renowned team like Alpha Flight or the Champions.</div></ClickRuleBasic></li>
                            <li><ClickRuleBasic title={<b>Rank 4—Legend</b>}><div>You're one of the most powerful super heroes in the nation. You could be your country's champion—like the Black Panther or Captain America—or you could join an internationally known team like the Avengers, the Fantastic Four or the X-Men.</div></ClickRuleBasic></li>
                            <li><ClickRuleBasic title={<b>Rank 5—Mythic</b>}><div>You're one of the most powerful super heroes on the planet, like Thor or the Scarlet Witch. You could protect the globe all by yourself, and even elite teams like the Avengers would eagerly welcome you as a member.</div></ClickRuleBasic></li>
                            <li><ClickRuleBasic title={<b>Rank 6—Cosmic</b>}><div>You're powerful enough to intervene in interstellar conflicts and single-handedly change the outcome, like Captain Marvel or the Silver Surfer. You make choices that decide the fate of entire star systems.</div></ClickRuleBasic></li>
                        </ul>
                    </div>
                </ClickRuleSplitTitle>
                <img alt={character.id} src={character.image}/>
                
                <br />
                
                <ClickRuleSplitTitle title={["Max Health", character.maxHealth]}>
                    <div>
                        <div>A character's <i>Health</i> measures their capacity to endure physical damage and keep fighting. It (Current Health) can be temporarily lowered by physical damage.</div>
                        <div>To calculate a character's Health, muliply their Resilience by 30. The minimum is 10 Health (Max Health), even if the character's Resilience is less than 1.</div>
                        <br></br>
                        <div><b>Example</b></div>
                        <div><i>Spider-Man's Resilience is 3. Multiply that by 30 to determine his Health, which is 90.</i></div>
                    </div>
                </ClickRuleSplitTitle>
                <ClickRuleMultipleInputs title={["Health", `${character.health} + `, <TextBox onSubmit={handleHealthSubmit} />, <button onClick={handleResetHealthClick}>Reset Health</button>]} titleClass={"stats-input"}>
                    <div className='subtitle'>Health</div>
                    <p>If a character's Health is reduced below 1, they are knocked <i>unconscious</i>. Any powers they were concentrating on end immediately.</p>
                    <p>While unconscious, a character cannot take any actions. Their defense against ranged attacks is reduced to 10, and close attacks automatically hit them. If a character's Health is reduced to a negative value equal in magnitude to their maximum Health, or worse, they are <i>killed</i>.</p>
                    <p><i><b>When attempting to subtract Health, be sure to enter a minus sign before the number!</b></i></p>
                </ClickRuleMultipleInputs>

                <br />
                
                <ClickRuleSplitTitle title={["Max Focus", character.maxFocus]}>
                    <div>
                        <div>A character's <i>Focus</i> represents their capacity for concentration and willpower. It (Current Focus) can be temporarily lowered by psychic damage or the use of certain powers.</div>
                        <div>To calculate a character's Focus, muliply their Vigilance by 30. The minimum is 10 Focus (Max Focus), even if the character's Vigilance is less than 1.</div>
                        <br></br>
                        <div><b>Example</b></div>
                        <div><i>Spider-Man's Vigilance is 3. Multiply that by 30 to determine his Focus, which is 90.</i></div>
                    </div>
                </ClickRuleSplitTitle>
                <ClickRuleMultipleInputs title={["Focus", `${character.focus} + `, <TextBox onSubmit={handleFocusSubmit}/>, <button onClick={handleResetFocusClick}>Reset Focus</button>]} titleClass={"stats-input"}>
                    <div className='subtitle'>Focus</div>
                    <p>If a character's Focus is reduced to 0, they are <i>demoralized</i>.</p>
                    <p>Any conditions  or powers they were concentrating on end immediately. While demoralized, they have trouble on all actions. If their Focus is reduced to a negative value equal in magnitude to their maximum Focus, or worse, they are <i>shattered</i>: frozen in place by fear and stress.</p>
                    <p><i><b>When attempting to subtract Focus, be sure to enter a minus sign before the number!</b></i></p>
                </ClickRuleMultipleInputs>
                
                <br />
                
                <ClickRuleSplitTitle title={["Health Damage Reduction", "-" + character.healthDamageReduction]}>
                    <div>
                        <div><b>Damage Reduction</b></div>
                        <div>Some powers and equipment grant damage reduction. This is expressed by a number, like Damage Reduction 2.</div>
                        <div>When calculating damage that an attack does to someone with damage reduction, reduce the damage multiplier by the amount of damage reduction. If the damage multiplier is reduced to less than 1, the attack does no damage at all, not even from the attacker's Ability score bonus.</div>
                        <div>If the attack gets a result that increases the damage multiplier, apply the damage reduction before figuring the increase.</div>
                        <div>As with damage multipliers, things that grant damage reduction bonuses <b>do not stack</b>. This means that they do not add together. If you have two or more instances of damage reduction that could apply in a situation, the largest one takes effect, and the others do not.</div>
                        <br></br>
                        <div><b>Example</b></div>
                        <div><i>Spider-Man (Miles Morales) punches Iron Man (Tony Stark) and hits. Spider-Man's Melee damage is (dMarvel*4)+3. Iron Man's Armor gives him Sturdy 2, which reduces the damage multiplier by 2, so the damage that gets through from a successful punch is (dMarvel*2)+3 instead.</i></div>
                        <div><i>Spider-Man takes another shot at Iron Man and gets a Fantastic success. This makes his damage 2*((dMarvel*2)+3) (which evaluates to (dMarvel*4)+6) instead.</i></div>
                        <div><i>Iron Man switches over to his Hulkbuster armor, which grants him Sturdy 4. Spider-Man hits him again, but this time, the Armor reduces his attack multiplier to 0, so the punch does no damage at all.</i></div>
                    </div>
                </ClickRuleSplitTitle>
                <ClickRuleSplitTitle title={["Focus Damage Reduction", "-" + character.focusDamageReduction]}>
                    <div>
                        <div><b>Damage Reduction</b></div>
                        <div>Some powers and equipment grant damage reduction. This is expressed by a number, like Damage Reduction 2.</div>
                        <div>When calculating damage that an attack does to someone with damage reduction, reduce the damage multiplier by the amount of damage reduction. If the damage multiplier is reduced to less than 1, the attack does no damage at all, not even from the attacker's Ability score bonus.</div>
                        <div>If the attack gets a result that increases the damage multiplier, apply the damage reduction before figuring the increase.</div>
                        <div>As with damage multipliers, things that grant damage reduction bonuses <b>do not stack</b>. This means that they do not add together. If you have two or more instances of damage reduction that could apply in a situation, the largest one takes effect, and the others do not.</div>
                        <br></br>
                        <div><b>Example</b></div>
                        <div><i>Spider-Man (Miles Morales) punches Iron Man (Tony Stark) and hits. Spider-Man's Melee damage is (dMarvel*4)+3. Iron Man's Armor gives him Sturdy 2, which reduces the damage multiplier by 2, so the damage that gets through from a successful punch is (dMarvel*2)+3 instead.</i></div>
                        <div><i>Spider-Man takes another shot at Iron Man and gets a Fantastic success. This makes his damage 2*((dMarvel*2)+3) (which evaluates to (dMarvel*4)+6) instead.</i></div>
                        <div><i>Iron Man switches over to his Hulkbuster armor, which grants him Sturdy 4. Spider-Man hits him again, but this time, the Armor reduces his attack multiplier to 0, so the punch does no damage at all.</i></div>
                    </div>
                </ClickRuleSplitTitle>
                
                <br />
                
                <ClickRuleSplitTitlePartialClick title={["Karma", <><button onClick={handleKarmaMinusClick} style={{"marginRight": "5px"}}>-</button> {character.karma} <button onClick={handleKarmaPlusClick} style={{"marginLeft": "5px"}}>+</button> <button onClick={handleKarmaResetClick} style={{"marginLeft": "15px"}}>Reset Karma</button></>]}>
                <div className="title"><b>Karma</b></div>
                    <div><i>Karma</i> represents that wild mix of luck, grit and destiny that seems to intervene in the lives of heroes. All heroes have Karma equal to their rank. To be considered a hero, the character has to have the tag "Heroic".</div>
                    <br></br>
                    <div><b>Example:</b> <i>Spider-Man is Rank 4, so he has 4 points of Karma.</i></div>
                    <br></br>
                    <div className="subtitle">Using Karma</div>
                    <div>After a character makes an action check, they can spend a point of Karma to gain an edge on the check. This allows them to reroll one of their dice.</div>
                    <div>When an enemy makes an action check that affects a character, the target can spend a point of Karma to give the attacker trouble on the check. This forces the attacker to reroll the best one of their dice.</div>
                    <div>A character cannot spend more than 1 point of Karma on any given action check.</div>
                    <div>A character's Karma resets to its standard number each time they get a decent night's sleep.</div>
                    <br></br>
                    <div className="subtitle">Recovering with Karma</div>
                    <div>If a hero is low on Health or Focus, they can spend a Karma point to make an action check to recover some of it.</div>
                    <div>For a Health recovery, make a Resilience check. For a Focus recovery, make a Vigilance check. The target number for either is 10.</div>
                    <div>On a success, total up the number normally and multiply it by the character's rank, just like you would with a damage roll. The character gains that many Health or focus points back, up to their maximum scores. A Fantastic success gives double that amount back.</div>
                    <div>You cannot spend additional Karma on this check to reroll a die.</div>
                    <div>In some circumstances, a character's teammate can spend a point of Karma to give them a recovery check as well.</div>
                    <br></br>
                    <div className="subtitle">Earning Karma</div>
                    <div>The Narrator can give a character a point of Karma for several reasons, at their discretion. Some examples include:</div>
                    <ul>
                        <li>The player did an excellent job role-playing the character.</li>
                        <li>The character rescued someone.</li>
                        <li>The character went out of their way to help someone.</li>
                        <li>The character made an inspiring speech.</li>
                        <li>The character shouted their catchphrase at an appropriate moment.</li>
                        <li>One of the character's challenging traits came into play.</li>
                    </ul>
                    <div>A character can have more Karma than their starting number, but if they fail to spend it before their Karma resets, they lose the excess.</div>
                    <br></br>
                    <div className="subtitle">Karma and Acting Heroic</div>
                    <div>Only characters with the tag "Heroic" start out with Karma, but other characters can earn Karma too by doing good things—even if they are not generally heroic people. This includes villains, like Doctor Doom or Killmonger, and the antiheroes like the Punisher too.</div>
                    <div>To make any use out of the Karma they earn, these non-heroes should spend it that same day. Otherwise, after they have a full night's sleep, their earned Karma vanishes.</div>
                </ClickRuleSplitTitlePartialClick>

                <br />
                
                <Speed />
                <br />
                <ClickRuleSplitTitle title={["Initiative Modifier", `+${character.initModifier} ${character.initModifierEdge}`]}>
                    <div>
                        <div>A character's <i>Initiative Modifier</i> helps determine when they can act during combat. The higher the number, the more likely they are to go first.</div>
                        <div>A character's Initiative Modifier is equal to their Vigilance. If there's an E next to a character's Initiative Modifier, that means they have an edge on their initiative checks.</div>
                        <br></br>
                        <div><b>Example</b></div>
                        <div><i>Spider-Man's Vigilance is 3, so his Initiative Modifier is +3 by default; however, Spider-Man also has a power called "Spider-Sense" that gives him an edge on initiative checks. So his Initiative modifier is +3 E</i></div>
                    </div>
                </ClickRuleSplitTitle>
            </div>
        </section>
    );
};