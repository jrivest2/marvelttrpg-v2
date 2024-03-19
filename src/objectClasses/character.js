import { useState } from "react";

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
        // this.powers
        // this.traits
        // this.tags
        this.biography = characterData.biography;

        this.maxHealth = characterData.resilience < 1 ? 10 : 30 * characterData.resilience;
        this.maxFocus = characterData.vigilance < 1 ? 10 : 30 * characterData.vigilance;        
        this.health = this.maxHealth;
        this.focus = this.maxFocus;

     
    };

   changeHealth(value) {
        if (this.health + value < -this.maxHealth) this.health = -this.maxHealth;
        else if (this.health + value > this.maxHealth) this.health = this.maxHealth;
        else this.health += value;
   }

   changeFocus(value) {
    if (this.focus + value < -this.maxFocus) this.focus = -this.maxFocus;
    else if (this.focus + value > this.maxFocus) this.focus = this.maxFocus;
    else this.focus += value;
   }

   resetHealth() {this.health = this.maxHealth}
   resetFocus() {this.focus = this.maxFocus}

};