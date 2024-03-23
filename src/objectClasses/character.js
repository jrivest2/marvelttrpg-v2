import Trait from "./trait"
import Tag from "./tag"
import Occupation from "./occupation";
import PowerSet from "./powerSet";
import Origin from "./origin"

export default class Character {
    constructor (characterData) {
        this.id = characterData.id;
        this.name = characterData.name;
        this.image = characterData.image;
        this.rank = characterData.rank;
        this.melee = characterData.melee;
        this.agility = characterData.agility;
        this.resilience = characterData.resilience;
        this.vigilance = characterData.vigilance;
        this.ego = characterData.ego;
        this.logic = characterData.logic;
        this.powerSets = characterData.hasClassObjects ? characterData.powerSets : Object.entries(characterData.powers).map((powerSet) => {
            const [name, powers] = powerSet;
            return new PowerSet(name, powers)
        })
        this.traits = characterData.hasClassObjects ? characterData.traits : characterData.traits.map((trait) => {return new Trait(trait)})
        this.tags = characterData.hasClassObjects ? characterData.tags : characterData.tags.map((tag) => {return new Tag(tag)})
        this.biography = characterData.biography;

        //Generated Stats
        this.maxHealth = characterData.resilience < 1 ? 10 : 30 * characterData.resilience;
        this.maxFocus = characterData.vigilance < 1 ? 10 : 30 * characterData.vigilance;        
        this.health = characterData.health ? characterData.health : this.maxHealth;
        this.focus = characterData.focus ? characterData.focus : this.maxFocus;
        this.occupation = characterData.biography.occupation.map((occupation) => {return new Occupation(occupation)})
        this.origin = characterData.biography.origin.map((origin) => {return new Origin(origin)})
        this.karma = characterData.hasClassObjects ? characterData.karma : (this.hasTag("Heroic") ? this.rank : 0);
    };

   changeHealth(value) {
    if (!value) return;
    else if (this.health + value < -this.maxHealth) this.health = -this.maxHealth;
    else if (this.health + value > this.maxHealth) this.health = this.maxHealth;
    else this.health += value;
    // console.log(this.health)
   }

   changeFocus(value) {
    if (!value) return;
    if (this.focus + value < -this.maxFocus) this.focus = -this.maxFocus;
    else if (this.focus + value > this.maxFocus) this.focus = this.maxFocus;
    else this.focus += value;
   }

   resetHealth() {this.health = this.maxHealth}
   resetFocus() {this.focus = this.maxFocus}

   setKarma(value) {
    if (this.karma + value >= 0) this.karma += value;
   }
   resetKarma() {this.karma = this.hasTag("Heroic") ? this.rank : 0}

   getSetNames() {
    return this.powerSets.map((powerSet)  => {
        return powerSet.name;
    });
   }

   hasTag(tagName) {
    const array = this.tags.filter(tag => tag.name == tagName)
    if (array.length < 1) return false;
    return true
   }

   getData() {
    return {
        id: this.id,
        name: this.name,
        rank: this.rank,
        melee: this.melee,
        agility: this.agility,
        resilience: this.resilience,
        vigilance: this.vigilance,
        ego: this.ego,
        logic: this.logic,
        image: this.image,
        powers: this.powerSets,
        traits: this.traits,
        tags: this.tags,
        biography: this.biography,
        health: this.health,
        focus: this.focus,
        karma: this.karma,
        hasClassObjects: true

    }
   }

};