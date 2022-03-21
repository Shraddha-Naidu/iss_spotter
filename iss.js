/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) =>{
    //Error occurs, print out
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      //log unsuccessful response code and throw an error
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    } else {
      //Should return an IP
      callback(null, JSON.parse(body.ip));

    }
  });
};

module.exports = { fetchMyIP };

