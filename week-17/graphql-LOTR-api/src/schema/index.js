const { gql } = require("apollo-server");

// define schema/type definitions
const typeDefs = gql`
  type Character {
    _id: ID
    name: String
    race: String
    gender: String
    quotes: [Quote]
  }

  type Movie {
    id: Int
    name: String
  }

  type Quote {
    id: Int
    quote: String
    movie: Movie
    character: Character
  }

  type Query {
    # query single character data, requiring id
    character(id: ID!): Character

    # query all movies
    movies: [Movie]

    # query all quotes
    quotes: [Quote]
  }

  # input UserInput {
  #  name: String!
  #  username: String!
  #  tags: [String]
  #}

  # EXAMPLE MUTATIONS
  #   type Mutation {
  #   createUser(input: UserInput!): User
  #   updateUser(input: UserInput! userId: ID!)
  #   deleteUser(userId: ID!):
  # }
`;

module.exports = typeDefs;
