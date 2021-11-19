class Character {
  // TODO: Add a constructor
  constructor(name, strength, hitpoints) {
    (this.name = name),
      (this.strength = strength),
      (this.hitpoints = hitpoints);
  }

  // TODO: Create a printStats() method that console logs `this.name`, `this.strength`, and `this.hitPoints`
  printStats() {
    console.log(`Stats for ${this.name} are:\n`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitpoints} hit points remaining.`);
  }

  // TODO: Create a isAlive() method that returns a boolean based on whether or not a character's "hitpoints" are <= 0
  isAlive() {
    this.hitpoints <= 0 ? true : false;
  }

  // TODO: Create a attack() method that accepts an opponent object and decreases the opponent's "hitPoints" by this character's strength
  attack(character2) {
    character2.hitpoints -= this.strength;
  }
}

// Creates two unique characters using the "character" constructor
const grace = new Character("Grace", 30, 75);
const dijkstra = new Character("Dijkstra", 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log("Game over!");
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);
