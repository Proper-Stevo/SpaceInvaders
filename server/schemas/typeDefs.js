
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
    type Auth {
    token: ID!
    user: User
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
    planet(name: String): Planet
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;