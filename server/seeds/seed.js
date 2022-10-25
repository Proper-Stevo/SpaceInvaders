const db = require('../config/connection');
const { Planets, User} = require('../models');

const planetsData = require('./planetsData.json');
const usersData = require('./usersData.json');

db.once('open', async () => {
  await Planets.deleteMany({});

  const planets = await Planets.insertMany(planetsData);

  console.log('Planets seeded!');
  process.exit(0);
});

db.once('open', async () => {
  await User.deleteMany({});

  const planets = await User.insertMany(usersData);

  console.log('Planets seeded!');
  process.exit(0);
});