const db = require('../config/connection');
const { Planets, User} = require('../models');

const planetsData = require('./planetsData.json');
const usersData = require('./usersData.json');
const commentsData = require('./commentsData.json')

db.once('open', async () => {
 
  await Planets.deleteMany({});

  const planets = await Planets.insertMany(planetsData);

  console.log('Planets seeded!');
  
  await User.deleteMany({});

  const users = await User.insertMany(usersData);

  console.log('Users seeded!');

  await Comment.deleteMany({});

  const comments = await Comment.insertMany(commentsData);  

  console.log('Comments seeded!');
  process.exit(0);
});

