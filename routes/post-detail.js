var express = require('express');
var router = express.Router();

/* GET post-detail page. */
router.get('/', function(req, res, next) {
  res.render('post-detail', {});
});

module.exports = router;
