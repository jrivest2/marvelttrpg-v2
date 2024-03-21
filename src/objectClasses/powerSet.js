import Power from './power';

export default class PowerSet {
    constructor(name, powers) {
        this.name = name;
        this.powers = powers.map((power) => {return new Power(power)});
    }

    hasPower(name) {
        if (this.powers.filter((power) => power.name == name)) return true;
        else return false;
    }
}