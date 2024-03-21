import originRules from '../Data-Files/origins.json';

export default class Origin {
    constructor(originName) {
        const originData = originRules.filter((origin) => origin.name == originName)[0]
        this.name = originData.name;
        this.description = originData.description;
        this.examples = originData.examples;
        this.tags = originData.tags;
        this.traits = originData.traits;
        this.suggestedOccupation = originData.suggestedOccupation;
    }
}