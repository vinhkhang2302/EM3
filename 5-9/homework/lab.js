// Base class: holds the data shared by every character
class character {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    // These methods act as "templates": child classes must override them
    attack() {
        throw new Error("attack() must be implemented");
    }

    defend() {
        throw new Error("defend() must be implemented");
    }

    getInfo() {
        throw new Error("getInfo() must be implemented");
    }
}

// Child class: Warrior fights with a sword and a shield
class warrior extends character {
    attack() {
        return `swing a sword\n`;
    }

    defend() {
        return `raise a shield\n`;
    }

    getInfo() {
        return `Warrior: ${this.name}\nHP: ${this.health} \nPower: ${this.power}\n`;
    }
}

// Child class: Mage fights with magic
class mage extends character {
    attack() {
        return `fire a ball\n`;
    }

    defend() {
        return `magic shield\n`;
    }

    getInfo() {
        return `Warrior: ${this.name}\nHP: ${this.health} \nPower: ${this.power}\n`;
    }
}

// Create a warrior and test its methods
c1 = new warrior("Khang", 100, 40);
console.log(c1.getInfo());
console.log(c1.attack());
console.log(c1.defend());

// Create a mage and test its methods
c2 = new mage("The", 80, 60);
console.log(c2.getInfo());
console.log(c2.attack());
console.log(c2.defend());
