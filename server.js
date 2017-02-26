'use strict';

const express = require('express');
const timestamp = require('./lib/timestamp');

const app = express();

app.use(express.static('public'));

app.get('/:date', (req, res) => {

	let date = req.params.date;

	if (/^[0-9]+$/.test(date))
		date = Number(date);

	res.json(timestamp(date));

});

var listener = app.listen(process.env.PORT || 3000, () => {
	console.log(`Running at port ${listener.address().port}`);
});