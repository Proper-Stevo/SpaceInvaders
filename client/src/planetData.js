const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

const planetData = [];
const totalPlanets = 9;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: random(0.5, 1)
  });
}




//* make an array of objects of each planet, then export planet data





// {
//     id: index,
//     color: randomColor(),
//     xRadius: (index + 1.5) * 4,
//     zRadius: (index + 1.5) * 2,
//     size: (0.5, 1)
//   }


  export default planetData;