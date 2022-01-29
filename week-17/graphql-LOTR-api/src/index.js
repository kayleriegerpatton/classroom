const typeDefs = require("./schema/index");
const resolvers = require("./resolvers/index");

// configure server
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
