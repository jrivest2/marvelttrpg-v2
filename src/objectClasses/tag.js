import tagRules from '../Data-Files/tags.json';

export default class Tag {
    constructor(tagName) {
        let addendum = '';
        if (typeof(tagName) != 'string') {
            const [temp, tempAddendum] = tagName;
            tagName = temp;
            addendum = tempAddendum;
        }
        const tagData = tagRules.filter((tag) => tag.name == tagName)[0]
        this.name = addendum ?  tagData.name + ": " + addendum : tagData.name;
        this.description = tagData.description;
        this.restriction = tagData.restriction;
        this.integrated = tagData.integrated;
    }
}