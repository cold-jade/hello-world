let log4js = require('log4js')

log4js.configure({
	appenders: {
		file: {
			type: 'dateFile',
			filename: './log/log',
			pattern: '.yyyy-MM-dd-hh-mm-ss'
		},
		stdout: {
			type: 'stdout'
		}
	},
	categories: {
		default: {
			appenders: ['file', 'stdout'],
			level: 'trace'
		},
		test: {
			appenders: ['stdout'],
			level: 'trace'
		}
	}
});

let logger = log4js.getLogger()
logger.level = 'trace'

setInterval(() => {

	logger.trace('Entering cheese testing');
	logger.debug('Got cheese.');
	logger.info('Cheese is Gouda.');
	logger.warn('Cheese is quite smelly.');
	logger.error('Cheese is too ripe!');
	logger.fatal('Cheese was breeding ground for listeria.');
}, 100)
