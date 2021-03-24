/* Daniel Co */

var express = require('express');
var databaseRouter = require('./dbms');
var router = express.Router();

//var query = "INSERT INTO ORDERS " + ;

function new_order(req, res, next){

    let orderid = ((Math.random() * Math.floor(5000)) + 1000); // generate a number between 1000-4999

    var notes;
    if (req.params.notes == null) {
        notes = "";
    } else {
        notes = req.params.notes;
    }

    var query = "INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (" + orderid + ", " + "'JAN', " + "3, " + req.params.quantity + ", " + "'" + req.params.topping + "', '" + notes + "');";

    databaseRouter.dbquery(query, function(err, result){
        res.json({"error": err, "data": result});
      });

}

// Convert data to json format and send
router.post('/:neworder?', new_order);

module.exports = router; 