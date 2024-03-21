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
        this.powerSets = Object.entries(characterData.powers).map((powerSet) => {
            const [name, powers] = powerSet;
            return new PowerSet(name, powers)
        })
        this.traits = characterData.traits.map((trait) => {return new Trait(trait)})
        this.tags = characterData.tags.map((tag) => {return new Tag(tag)})
        this.biography = characterData.biography;

        this.maxHealth = characterData.resilience < 1 ? 10 : 30 * characterData.resilience;
        this.maxFocus = characterData.vigilance < 1 ? 10 : 30 * characterData.vigilance;        
        this.health = this.maxHealth;
        this.focus = this.maxFocus;
        this.occupation = characterData.biography.occupation.map((occupation) => {return new Occupation(occupation)})
        this.origin = characterData.biography.origin.map((origin) => {return new Origin(origin)})
    };

   changeHealth(value) {
        if (!value) return;
        else if (this.health + value < -this.maxHealth) this.health = -this.maxHealth;
        else if (this.health + value > this.maxHealth) this.health = this.maxHealth;
        else this.health += value;
        console.log(this.health)
   }

   changeFocus(value) {
    if (!value) return;
    if (this.focus + value < -this.maxFocus) this.focus = -this.maxFocus;
    else if (this.focus + value > this.maxFocus) this.focus = this.maxFocus;
    else this.focus += value;
   }

   resetHealth() {this.health = this.maxHealth}
   resetFocus() {this.focus = this.maxFocus}

   getSetNames() {
    return this.powerSets.map((powerSet)  => {
        return powerSet.name;
    });
   }

};