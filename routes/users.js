var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This section must be show something about users');
});

router.get('/details', function(req, res, next) {
  res.send('The site can show some user details in order to expose some more information');
});

module.exports = router;
