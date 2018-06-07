var express = require('express');
var router = express.Router();

/* GET family page. */
router.get('/', function(req, res, next) {
  res.render('family', {});
});

module.exports = router;
