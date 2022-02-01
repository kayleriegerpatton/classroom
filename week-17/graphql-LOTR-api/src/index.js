const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// create new server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// initialize server
const init = async () => {
  const { url } = await server.listen();

  console.log(`Server running at ${url}`);
};

init();
