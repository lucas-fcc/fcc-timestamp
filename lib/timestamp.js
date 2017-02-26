'use strict';

const dateFormat = require('dateformat');

function timestamp(input) {

	const date = new Date(input);

	if(!isValid(date))
		return { "unix": null, "natural": null };

	return { 
		'unix': date.getTime(),
		'natural': dateFormat(date, 'longDate')
	};

};

function isValid(date) {
	return !isNaN(date.getTime());
};

module.exports = timestamp;