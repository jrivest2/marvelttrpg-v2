import powerRules from '../Data-Files/powers.json';
import iconicWeaponFile from '../Data-Files/iconic-weapons.json';

export default class Power {
    constructor(powerName, iconicWeaponName) {
        let powerData = {}
        if (typeof(powerName) === "object") {
            powerData = powerRules.filter((power) => power.name == powerName[0])[0];
            this.name = powerName[0] + ": " + powerName[1];
        }
        else {
            powerData = powerRules.filter((power) => power.name == powerName)[0];
            this.name = powerData.name;
        }
        this.summary = powerData.summary;
        this.set = powerData.set;
        this.prerequisites = powerData.prerequisites;
        this.action = powerData.action;
        this.trigger = powerData.trigger;
        this.duration = powerData.duration;
        this.range = powerData.range;
        this.cost = powerData.cost;
        this.effect = powerData.effect;
        
        if (iconicWeaponName && this.name === "Iconic Weapon") {
            const iconicWeaponData = iconicWeaponFile.filter((weapon) => weapon.name == iconicWeaponName)[0]
            this.iconicWeaponName = iconicWeaponName;
            this.name = this.name + ": " + this.iconicWeaponName;
            this.combatRules = iconicWeaponData.combatRules;
            this.narrativeRules = iconicWeaponData.narrativeRules;
            this.integrated = iconicWeaponData.integrated;
        }
        else this.integrated = powerData.integrated;
    }
}