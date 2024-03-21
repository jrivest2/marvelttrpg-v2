import tagRules from '../Data-Files/tags.json';

export default class Tag {
    constructor(tagName) {
        const tagData = tagRules.filter((tag) => tag.name == tagName)[0]
        this.name = tagData.name;
        this.description = tagData.description;
        this.restriction = tagData.restriction;
        this.integrated = tagData.integrated;
    }
}