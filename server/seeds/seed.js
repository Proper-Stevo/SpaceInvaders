const db = require('../config/connection');
const { Planets, User, Comment} = require('../models');

const planetsData = require('./planetsData.json');
const usersData = require('./usersData.json');
const commentsData = require('./commentsData.json')

db.once('open', async () => {
 
  await Planets.deleteMany({});

  const planets = await Planets.insertMany(planetsData);

  console.log('Planets seeded!');
  
  await User.deleteMany({});

  const users = await User.create(usersData);

  console.log('Users seeded!');

  await Comment.deleteMany({});

  const comments = await Comment.insertMany(commentsData);  

  for (let i = 0; i < commentsData.length; i++) {
    const { _id, commentAuthor } = await Comment.create(commentsData[i]);
    const user = await User.findOneAndUpdate(
      { username: commentAuthor },
      {
        $addToSet: {
          comments: _id,
        },
      }
    );
  }

  console.log('Comments seeded!');
  process.exit(0);
});

