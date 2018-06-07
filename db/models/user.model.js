let db = require('../db')
let Sequelize = require('sequelize')
let config = require('../../config/config')

let userModel = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING(50),
		unique: true,
		allowNull: false
	}
}, {})

userModel.sync({
		force: config.db.syncForce
	})
	.then(model => {
		model.create({
			name: 'root'
		})
	})
