// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");

const getDistanceFromIss = (address) => {
  // write a new Promise here...
  const positionIss = getIssPosition();
  const positionAdd = getPositionFromAddress(address);

  const getDistance = (pos1, pos2) => {
    return Math.sqrt(
      Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
    );
  };

  return Promise.all([
    positionIss,
    positionAdd,
  ]).then(([positionIss, positionAdd]) =>
    getDistance(positionIss, positionAdd)
  );
};

getDistanceFromIss("new york").then((results) => console.log(results));
