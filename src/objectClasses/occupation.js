import occupationRules from '../Data-Files/occupations.json';

export default class Occupation {
    
    constructor (occupationName) {
        const occupationData = occupationRules.filter((occupation) => occupation.name == occupationName)[0];
        this.name = occupationData.name;
        this.description = occupationData.description;
        this.examples = occupationData.examples;
        this.tags = occupationData.tags; //maybe do tag objects later??
        this.traits = occupationData.traits;

    }
}