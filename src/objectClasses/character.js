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
        this.occupation = characterData.biography.occupation.map((occupation) => {return new Occupation(occupation)})
        this.origin = characterData.biography.origin.map((origin) => {return new Origin(origin)})

        //Generated Stats
        this.generateBasicStats(characterData)
        this.generateAbilityScores(characterData)
        this.setSpeeds(characterData)
        //this.updateTraitStats(characterData)
        //this.updatePowerStats(characterData)
    };

   changeHealth(value) {
    if (!value) return;
    else if (this.health + value < -this.maxHealth) this.health = -this.maxHealth;
    else if (this.health + value > this.maxHealth) this.health = this.maxHealth;
    else this.health += value;
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


   generateBasicStats(characterData) {
    if (characterData.hasClassObjects) {
        this.maxHealth = characterData.maxHealth;
        this.maxFocus = characterData.maxFocus;
        this.health = characterData.health;
        this.focus = characterData.focus;
        this.karma = characterData.karma;
    } else {
        this.maxHealth = characterData.resilience < 1 ? 10 : 30 * characterData.resilience;
        this.maxFocus = characterData.vigilance < 1 ? 10 : 30 * characterData.vigilance;        
        this.health = this.maxHealth;
        this.focus = this.maxFocus;
        this.karma = this.hasTag("Heroic") ? this.rank : 0;
    }
    
   }

   generateAbilityScores(characterData) {
    if (characterData.hasClassObjects) {
        this.mDefense = characterData.mDefense;
        this.aDefense = characterData.aDefense;
        this.rDefense = characterData.rDefense;
        this.vDefense = characterData.vDefense;
        this.eDefense = characterData.eDefense;
        this.lDefense = characterData.lDefense;

        this.mNonCombat = characterData.mNonCombat;
        this.aNonCombat = characterData.aNonCombat;
        this.rNonCombat = characterData.rNonCombat;
        this.vNonCombat = characterData.vNonCombat;
        this.eNonCombat = characterData.eNonCombat;
        this.lNonCombat = characterData.lNonCombat;
    }
    else {
        this.mDefense = this.melee + 10;
        this.aDefense = this.agility + 10;
        this.rDefense = this.resilience + 10;
        this.vDefense = this.vigilance + 10;
        this.eDefense = this.ego + 10;
        this.lDefense = this.logic + 10;

        this.mNonCombat = this.melee;
        this.aNonCombat = this.agility;
        this.rNonCombat = this.resilience;
        this.vNonCombat = this.vigilance;
        this.eNonCombat = this.ego;
        this.lNonCombat = this.logic;

        this.healthDamageReduction = 0;
        this.focusDamageReduction = 0;

        this.initModifier = 0;

        //Check for powers/traits/tags that may effect these scores.
    }
   }

   setSpeeds(characterData) {
    if (characterData.hasClassObjects) {
        this.runSpeed = characterData.runSpeed;
        this.climbSpeed = characterData.climbSpeed;
        this.jumpSpeed = characterData.jumpSpeed;
        this.nonCombatJumpSpeed = characterData.nonCombatJumpSpeed;
        this.swimSpeed = characterData.swimSpeed;
        this.flightSpeed = characterData.flightSpeed;
        this.nonCombatFlightSpeed = characterData.nonCombatFlightSpeed;
        this.swingSpeed = characterData.swingSpeed;
        this.glideSpeed = characterData.glideSpeed;
        this.levitateSpeed = characterData.levitateSpeed;
    }
    else {
        const baseSpeed = 5;
        this.runSpeed = baseSpeed + parseInt(characterData.agility / 5);
        this.climbSpeed = parseInt(this.runSpeed / 2) + (this.runSpeed % 2);
        this.jumpSpeed = parseInt(this.runSpeed / 2) + (this.runSpeed % 2);
        this.nonCombatJumpSpeed = 0;
        this.swimSpeed = parseInt(this.runSpeed / 2) + (this.runSpeed % 2);
        this.flightSpeed = 0;
        this.nonCombatFlightSpeed = 0;
        this.glideSpeed = 0;
        this.swingSpeed = 0;
        this.levitateSpeed = 0;

    }
   }

   getSpeeds() {
    return {
        runSpeed: this.runSpeed,
        climbSpeed: this.climbSpeed,
        jumpSpeed: this.jumpSpeed,
        nonCombatJumpSpeed: this.nonCombatJumpSpeed,
        swimSpeed: this.swimSpeed,
        flightSpeed: this.flightSpeed,
        nonCombatFlightSpeed: this.nonCombatFlightSpeed,
        swingSpeed: this.swingSpeed,
        glideSpeed: this.glideSpeed,
        levitateSpeed: this.levitateSpeed
    }
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
        maxHealth: this.maxHealth,
        health: this.health,
        maxFocus: this.maxFocus,
        focus: this.focus,
        karma: this.karma,
        mDefense: this.mDefense,
        aDefense: this.aDefense,
        rDefense: this.rDefense,
        vDefense: this.vDefense,
        eDefense: this.eDefense,
        lDefense: this.lDefense,
        mNonCombat: this.mNonCombat,
        aNonCombat: this.aNonCombat,
        rNonCombat: this.rNonCombat,
        vNonCombat: this.vNonCombat,
        eNonCombat: this.eNonCombat,
        lNonCombat: this.lNonCombat,
        healthDamageReduction: this.healthDamageReduction,
        focusDamageReduction: this.focusDamageReduction,
        initModifier: this.initModifier,
        runSpeed: this.runSpeed,
        climbSpeed: this.climbSpeed,
        jumpSpeed: this.jumpSpeed,
        nonCombatJumpSpeed: this.nonCombatJumpSpeed,
        swimSpeed: this.swimSpeed,
        flightSpeed: this.flightSpeed,
        nonCombatFlightSpeed: this.nonCombatFlightSpeed,
        swingSpeed: this.swingSpeed,
        glideSpeed: this.glideSpeed,
        levitateSpeed: this.levitateSpeed,
        hasClassObjects: true

    }
   }

};