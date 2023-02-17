var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('For this section we will work on be displaying a custom map');
});

module.exports = router;