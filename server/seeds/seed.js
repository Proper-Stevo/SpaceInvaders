const db = require('../config/connection');
const { Planets } = require('../models');

// ! COMMENTED OUT FOR NOW
// const planetsData = require('./planetsData.json');

db.once('open', async () => {
  await Planets.deleteMany({});

  const planets = await Planets.insertMany(planetsData);

  console.log('Planets seeded!');
  process.exit(0);
});