// import individual resolver functions
const character = require("./character");
const movie = require("./movie");
const quote = require("./quote");

// Review nested resolvers
//
const resolvers = {
  Query: {
    character,
    // movie,
    // quote,
  },
};

module.exports = resolvers;
