// TODO: Add a comment describing what kind of function this is
// constructor function
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// .prototype refers to the instantiated character object created from the character constructor fun
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log("\n-------------\n");
};

// TODO: Add a comment describing the functionality of this method
// based on the instantiated character object's hitpoints key value, displays whether it is alive or has died
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log("\n-------------\n");
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// attack method decrements the character2 hitpoints key value by the value of the attacking object's strength
// TODO: Add a comment describing the functionality of this method
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// when a character object 'levels up,' increments the age, strength, and hitpoints key values
// TODO: Add a comment describing the functionality of this method
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character("Crusher", "Warrior", 25, 10, 75);
const rogue = new Character("Dodger", "Rogue", 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// Name: Crusher Profession: Warrior Age: 25 Strength: 10 Hitpoints: 55
// TODO: Add a comment describing what you expect to see printed in the console
warrior.printStats();

// Crusher is still alive!
// TODO: Add a comment describing what you expect to see printed in the console
warrior.isAlive();

rogue.levelUp();

// Name: Dodger Profession: Rogue Age: 24 Strength: 25 Hitpoints: 75
// TODO: Add a comment describing what you expect to see printed in the console
rogue.printStats();
