const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');

//PROMISE CHAIN
/* fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body)); */

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })

  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  //Remember that a file is exported then it must be imported elsewhere!!
