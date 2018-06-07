
const devConfig = {
	port: 2017,
	db: {
		host: 'localhost',
		port: 3306,
		db: 'yueying',
		user: 'root',
		passwd: '',
		syncForce: true,
		logging: console.log
	}
}

const proConfig = {
	port: 2018,
	db: {
		host: 'localhost',
		port: 3306,
		db: 'yueying',
		user: 'root',
		passwd: '',
		syncForce: false,
		logging: false
	}
}

module.exports = (process.argv[2] == 'production') ? proConfig : devConfig

