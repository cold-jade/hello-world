let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
	let data = require('../website-src/data/index.json')

  res.render('index', data)
})

module.exports = router
