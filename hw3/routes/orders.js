/* Daniel Co */

var express = require('express');
var router = express.Router();

var cheesecake1 = {topping: "cherry", quantity: 2};
var cheesecake2 = {topping: "plain", quantity: 6};
var cheesecake3 = {topping: "chocolate", quantity: 3};

// Construct array of objects
let cheesecakes = [cheesecake1, cheesecake2, cheesecake3]

function orders(){

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.json(cheesecakes);
});

router.post('/', function(req, res, next) {
  res.json(cheesecakes);
});
}

orders();
module.exports = router;

