var express = require('express');
var router = express.Router();
var  customer_route = require("./custom_route")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET API */
router.use("/api",customer_route)

module.exports = router;
