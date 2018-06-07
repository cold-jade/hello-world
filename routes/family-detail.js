var express = require('express');
var router = express.Router();

/* GET family-detail page. */
router.get('/', function(req, res, next) {
  res.render('family-detail', {});
});

module.exports = router;
