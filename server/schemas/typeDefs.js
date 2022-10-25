
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Planet {
    _id: ID
    name: String
    mass: Int
    gravity: Int
    density: Int
    avgTemp: Int
    bodyType: String
  }
  type Query {
    users: [User]
    planets: [Planet]
  }
`;

module.exports = typeDefs;