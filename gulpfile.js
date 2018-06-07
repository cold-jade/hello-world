'use strict';

/**
 * @ignore  =====================================================================================
 * @file gulpfile.js
 * @author  damon
 * @version 0.1.0
 * @ignore  created in 2017/2/18
 * @ignore  depend gulp colors argv
 * @ignore  =====================================================================================
 */

let gulp = require('gulp')
let colors = require('colors')
let argv = require('yargs').argv

switch (argv.env) {

	case 'webapp': {

		require('./tasks/webapp.gulpfile')
		break
	}
	default: {

		require('./tasks/website.gulpfile')
	}
}

console.log(('\n\n=> development enviroment: ' + argv.env + ' <=\n\n').red)
