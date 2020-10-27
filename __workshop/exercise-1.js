// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) => {
    if (array.every((item) => typeof item === "string")) {
      const arrayToCaps = array.map((i) => i.toUpperCase());
      resolve(arrayToCaps);
    } else {
      reject(`Array contains non-string values`);
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  // write some code
  myOtherPromise = new Promise((resolve, reject) => {
    if (array.every((item) => typeof item === "string")) {
      const arraySorted = array.sort();
      resolve(arraySorted);
    } else {
      reject(`Array contains non-string values`);
    }
  });
  return myOtherPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
