// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "ab5f9ab018334b1fb12a55ee522021e5",
    q: lat,
    lng,
  };

  // return ...
  return opencage.geocode(requestObj).then((data) => data.results[0].formatted);
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
