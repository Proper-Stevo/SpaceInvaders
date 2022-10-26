
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
  }
    type Auth {
    token: ID!
    user: User
  }
  type Planet {
    _id: ID
    name: String
    mass: Float
    gravity: Float
    density: Float
    avgTemp: Int
    bodyType: String
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Query {
    users: [User]
    planets: [Planet]
    planet(name: String): Planet
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentText: String!, commentAuthor: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;

module.exports = typeDefs;