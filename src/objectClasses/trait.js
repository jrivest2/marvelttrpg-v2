import traitRules from '../Data-Files/traits.json'

export default class Trait {
    
    constructor(traitName) {
        const traitData = traitRules.filter((trait) => trait.name == traitName)[0]
        this.name = traitData.name;
        this.description = traitData.description;
        this.restriction = traitData.restriction;
        this.integrated = traitData.integrated;
    }
}