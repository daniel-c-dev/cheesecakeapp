/* Daniel Co */

var express = require('express');
var router = express.Router();

// Construct array of objects
let cheesecakes = [{topping: "cherry", quantity: "2"}, {topping: "plain", quantity: "6"}, {topping: "chocolate", quantity: "3"}];

function orders(){

// Convert data to json format and send
// Resources: https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express
// Usage: setting the correct header and using stringify to send a json object
router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({cheesecakes}));
});
}

orders(); 
module.exports = router; 