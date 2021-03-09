/* Daniel Co */

var express = require('express');
var databaseRouter = require('./dbms');
var router = express.Router();

/* Orders function: callback function for get/post.
@param month: The month to retrieve data for.
*/
function orders(req, res){
// Calls the dbquery function and sends either an "error" or data to the server
// Resources: https://stackoverflow.com/questions/40639589/how-do-i-return-callback-of-mysql-query-and-push-to-an-array-in-node-js
// Usage: Setting up a callback function

// HW5
// Resources: https://www.w3schools.com/sql/sql_count_avg_sum.asp
//            https://stackoverflow.com/questions/12612927/what-sql-query-should-i-use
//            https://www.w3schools.com/sql/sql_groupby.asp
//            https://stackoverflow.com/questions/4696283/what-are-res-and-req-parameters-in-express-functions/4696338
//            https://stackoverflow.com/questions/42249293/how-to-pass-a-post-request-to-the-router-pages-in-express
// Usage: Getting the sum of a column from the table
// Usage: Using a sql query to find the number of a certain item
// Usage: Sending a get/post request to routers
//let query = "SELECT MONTH,SUM(QUANTITY) FROM ORDERS WHERE MONTH="+ month + " GROUP BY TOPPING;"; // get sum of each topping from selected month

// Resources: https://stackoverflow.com/questions/14134352/group-by-category-and-order-categories/14134495
//            https://www.w3resource.com/sql/aggregate-functions/sum-with-group-by.php
// Usage: grouping toppings together
var query = "SELECT SUM(QUANTITY) AS TOTAL, TOPPING FROM ORDERS WHERE MONTH='" + req.params.month + "' GROUP BY TOPPING";

databaseRouter.dbquery(query, function(err, result){
  res.json({"error": err, "data": result});
});
}

// Get data
// Resources: https://api.jquery.com/jquery.get/
//            https://expressjs.com/en/guide/routing.html
// Usage: Parameters for get function
// Usage: Defining a route path/params
router.get('/:month', orders);

// Convert data to json format and send
// Resources: https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express
// Usage: setting the correct header and using stringify to send a json object
router.post('/:month', orders);

module.exports = router; 