let db = require('../db')
let Sequelize = require('sequelize')
let config = require('../../config/config')

let profileModel = db.define('profile', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	department: Sequelize.STRING(30)
}, {})

profileModel.sync({
		force: config.db.syncForce
	})
	.then(model => {
		model.create({
			department: '管理部'
		})
	})
