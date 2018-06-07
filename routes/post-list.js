var express = require('express');
var router = express.Router();

/* GET post-list page. */
router.get('/', function(req, res, next) {
  res.render('post-list', {});
});

module.exports = router;
