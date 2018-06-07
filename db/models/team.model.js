let db = require('../db')
let Sequelize = require('sequelize')
let config = require('../../config/config')

let teamModel = db.define('team', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING(50),
		allowNull: false
	}
}, {})

teamModel.sync({
		force: config.db.syncForce
	})
	.then(() => {
		teamModel.create({
			name: '合肥工业大学江淮汽车越影车队'
		})
	})
