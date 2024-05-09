import Power from './power';

export default class PowerSet {
    constructor(name, powers, iconicWeapon) {
        this.name = name;
        this.powers = powers.map((power) => {
            if (iconicWeapon) {return new Power(power, iconicWeapon)}
            return new Power(power);
        });
    }

    hasPower(name) {
        if (this.powers.filter((power) => power.name == name)) return true;
        else return false;
    }

}