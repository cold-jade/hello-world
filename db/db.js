let config = require('../config/config')
let Sequelize = require('sequelize')
let log4js = require('log4js')
let logger = log4js.getLogger('db')

/**
 * CONFIG.DB
 */

let database = config.db.db
let user = config.db.user
let passwd = config.db.passwd
let host = config.db.host
let port = config.db.port
let opt = {
	host: host,
	port: port,
	timezone: '+08:00',
	dialect: 'mysql',
	poll: {
		maxConnections: 40,
		minConnections: 0,
		maxIdleTime: 10000
	},
	logging: config.db.logging,
	define: {
		freezeTableName: true
	}
}
let db = new Sequelize(database, user, passwd, opt)

/**
 * Import.models
 * how to get models? => db.models.modelName || db.model(modelName)
 */

// let userModel = db.import('./models/user.model')

/**
 * SET.ASSOCIATIONS
 */

/**
 * Sequelize.synchronization
 */
// sync all models that aren't already in the database
// db.sync()
// sync all models
// db.sync({
// 	force: true
// })
// sync all models only match regex(end with _test)
// db.sync({ force: true, match: /_test$/ })

module.exports = db;
