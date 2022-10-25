const db = require('../config/connection');
const { Planets, User} = require('../models');

const planetsData = require('./planetsData.json');
const usersData = require('./usersData.json');

db.once('open', async () => {
  await Planets.deleteMany({});

  const planets = await Planets.insertMany(planetsData);

  console.log('Planets seeded!');
  
  await User.deleteMany({});

  const users = await User.insertMany(usersData);

  console.log('Users seeded!');
  process.exit(0);
});