class Monster {
    constructor(hp, name) {
        if (this.constructor === Monster) {
            throw new Error("Can't instantiate abstract class!");
        } else {
            this.hp = hp;
            this.name = name;
        }
    }
    getName() {
        console.log(this.name);
    }
    getHp() {
        console.log(this.hp);
    }
    attack() {
        throw new Error("Abstract method, implement in the specific monster");
    }
}

class Hourseman extends Monster {
    constructor(hp, name) {
        super(hp, name);
    }
    attack(enemy) {
        let basicAttack = 75;
        console.log(`Hourseman basic attack: ${basicAttack}`);
        enemy.hp -= basicAttack;
    }
}

class Demon extends Monster {
    constructor(hp, name) {
        super(hp, name);
    }
    attack(enemy) {
        let basicAttack = 50;
        console.log(`Demon basic attack: ${basicAttack}`);
        enemy.hp -= basicAttack;
    }
}

class Vampire extends Monster {
    constructor(hp, name) {
        super(hp, name);
    }
    attack(enemy) {
        let basicAttack = 25;
        console.log(`Vampire basic attack: ${basicAttack}`);
        enemy.hp -= basicAttack;
    }
}

class MonsterDecorator {
    constructor(monster, addName, addHp) {
        this.monster = monster;
        this.name = `${addName} ${monster.name}`;
        this.hp = monster.hp + addHp;
    }

    attack(enemy) {}
}

class poison extends MonsterDecorator {
    constructor(monster, addName, addHp) {
        super(monster, addName, addHp);
    }

    attack(enemy) {
        let poisonAttack = 100;
        console.log(`${this.name} poison attack: ${poisonAttack} damage`);

        setTimeout(() => {
            enemy.hp -= poisonAttack;
        }, 1000);
    }
}

class Fire extends MonsterDecorator {
    constructor(monster, addName, addHp) {
        super(monster, addName, addHp);
    }

    attack(enemy) {
        let fireAttack = 150;
        console.log(`${this.name} fire attack: ${fireAttack} damage`);
        while (enemy.hp >= 0) {
            enemy.hp -= fireAttack;
        }
    }
}

class Strength extends MonsterDecorator {
    constructor(monster, addName, addHp) {
        super(monster, addName, addHp);
    }

    attack(enemy) {
        let strongAttack = 500;
        console.log(`${this.name} fang attack: ${strongAttack} damage`);
        enemy.hp -= strongAttack;
    }
}

let benny = new Vampire(10000, "Benny Lafitte");
let crowly = new Demon(5000, "Fergus Roderick MacLeod");
let pestilence = new Hourseman(50000000, "Pestilence");
// benny.getName();
// benny.getHp();

let poweredBenny = new Strength(benny, "Alpha", 5000);
poweredBenny.attack(crowly);
console.log(poweredBenny);
