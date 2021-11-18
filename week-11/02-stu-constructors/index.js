// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
class Developer {
  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
  }
  // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
  //   introduce developer
  introduction() {
    console.log(`Hi, I\'m ${this.name} and I love ${this.tech}.`);
  }
}

// TODO: Create a new object using the 'Developer' constructor
const kayle = new Developer("Kayle", "CSS");

// TODO: Call the 'introduction()' method on the new object
kayle.introduction();
