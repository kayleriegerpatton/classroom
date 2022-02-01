// EXAMPLE MUTATION RESOLVER

const { UserInputError } = require("apollo-server");

// destructure input from request
const createUser = (_, { input }) => {
  // use input to create User with mongoose methods
  //   create new user
  const newUser = new UserInputError(input);

  //   save new user record
  await newUser.save();

  //   return user object
  return newUser;
};

module.exports = createUser;
