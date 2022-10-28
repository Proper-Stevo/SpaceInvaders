const { Planets , User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate('comments');
    },
    planets: async () => {
      return Planets.find({});
    },
    planet: async (parent, { name }) => {
      return Planets.findOne({ name });
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, { commentText, commentAuthor }) => {
      const comment = await Comment.create({ commentText, commentAuthor });

      await User.findOneAndUpdate(
        { username: commentAuthor },
        { $addToSet: { comments: comment._id } }
      );

      return comment;
    },
    removeComment: async (parent, { commentId }) => {
      return Comment.findOneAndDelete({ _id: commentId });
    },
  },
};

module.exports = resolvers;
