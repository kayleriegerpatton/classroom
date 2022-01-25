// import apollo server and gql fn
const { ApolloServer, gql } = require("apollo-server");

// mock data
const artistsFromDB = [
  {
    id: 222,
    firstName: "Georgia",
    lastName: "O'Keefe",
    birthYear: 1887,
    deathYear: 1986,
  },
  {
    id: 333,
    firstName: "Imogen",
    lastName: "Cunningham",
    birthYear: 1883,
    deathYear: 1976,
  },
  {
    id: 444,
    firstName: "Mark",
    lastName: "Rothko",
    birthYear: 1903,
    deathYear: 1970,
  },
];

const artworksFromDB = [
  {
    id: 11,
    title: "Cow's Skull with Calico Roses",
    creationYear: 1931,
    type: "painting",
    artist: {
      id: 222,
      firstName: "Georgia",
      lastName: "O'Keefe",
      birthYear: 1887,
      deathYear: 1986,
    },
  },
  {
    id: 22,
    title: "Sky Above Clouds IV",
    creationYear: 1965,
    type: "painting",
    artist: {
      id: 222,
      firstName: "Georgia",
      lastName: "O'Keefe",
      birthYear: 1887,
      deathYear: 1986,
    },
  },
  {
    id: 33,
    title: "Flax 2",
    creationYear: 1920,
    type: "photograph",
    artist: {
      id: 333,
      firstName: "Imogen",
      lastName: "Cunningham",
      birthYear: 1883,
      deathYear: 1976,
    },
  },
  {
    id: 44,
    title: "Red and Pink on Pink",
    creationYear: 1953,
    type: "painting",
    artist: {
      id: 444,
      firstName: "Mark",
      lastName: "Rothko",
      birthYear: 1903,
      deathYear: 1970,
    },
  },
  {
    id: 55,
    title: "White Center (Yellow, Pink and Lavender on Rose)",
    creationYear: 1950,
    type: "painting",
    artist: {
      id: 444,
      firstName: "Mark",
      lastName: "Rothko",
      birthYear: 1903,
      deathYear: 1970,
    },
  },
];

// Step 1: define schema/type definitions
const typeDefs = gql`
  type Artist {
    id: Int
    firstName: String
    lastName: String
    birthYear: Int
    deathYear: Int
  }

  type Artwork {
    id: Int
    title: String
    creationYear: Int
    type: String
    artist: Artist
  }

  # All queries go here
  type Query {
    artists: [Artist]
    artworks: [Artwork]
  }
`;

// Step 2: declare resolvers
const artistsResolver = () => {
  // return value must respect schema
  return artistsFromDB;
};

const artworksResolver = () => {
  // return value must respect schema
  return artworksFromDB;
};

const resolvers = {
  Query: {
    artists: artistsResolver,
    artworks: artworksResolver,
  },
};

// establish server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
