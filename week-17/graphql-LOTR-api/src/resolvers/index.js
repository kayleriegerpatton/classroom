// import individual resolver functions
const character = require("./character");
const movie = require("./movie");
const quote = require("./quote");

const resolvers = {
  // all resolvers that resolve a GraphQL query
  Query: {
    //   imported resolver fns
    character,
    // movie,
    // quote,
  },

  //   Mutation: {

  //   }
};

module.exports = resolvers;
