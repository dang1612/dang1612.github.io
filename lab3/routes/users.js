var express = require('express');
var router = express.Router();

//URL : localhost :3000/user
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
