import powerRules from '../Data-Files/powers.json';

export default class Power {
    constructor(powerName) {
        const powerData = powerRules.filter((power) => power.name == powerName)[0]
        this.name = powerData.name;
        this.summary = powerData.summary;
        this.set = powerData.set;
        this.prerequisites = powerData.prerequisites;
        this.action = powerData.action;
        this.trigger = powerData.trigger;
        this.duration = powerData.duration;
        this.range = powerData.range;
        this.cost = powerData.cost;
        this.effect = powerData.effect;
        this.integrated = powerData.integrated;
    }
}