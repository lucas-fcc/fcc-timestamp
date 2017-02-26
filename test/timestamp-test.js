'use strict';

const assert = require('chai').assert;
const timestamp = require('../lib/timestamp')

describe('Timestamp Module', () => {

	it('Returns an object', () => {

		const output = timestamp('');

		assert.isObject(output);

	});

	it('Object returned contains a property called "unix"', () => {

		const output = timestamp('');

		assert.property(output, 'unix');

	});

	it('Object returned contains a property called "natural"', () => {

		const output = timestamp('');

		assert.property(output, 'natural');

	});

	it('when receives a natural language date returns the correct unix time', () => {

		const natural = 'February 25, 2017';
		const output = timestamp(natural);

		const expected = new Date(natural).getTime();

		assert.strictEqual(output.unix, expected);

	});

	it('when receives a natural language date returns the date in natural language', () => {

		const natural = 'February 25, 2017';
		const output = timestamp(natural);

		assert.strictEqual(output.natural, natural);

	});

	it('when receives a unix time returns the correct unix time', () => {

		const unix = new Date('February 25, 2017').getTime();
		const output = timestamp(unix);

		assert.strictEqual(output.unix, unix);

	});

	it('when receives a unix time returns the date in natural language', () => {

		const unix = new Date('February 25, 2017').getTime();
		const output = timestamp(unix);

		const expected = 'February 25, 2017';

		assert.strictEqual(output.natural, expected);

	});

	it('when receives an invalid input return an object whith properties null', () => {

		const output = timestamp('invalid');

		assert.isNull(output.unix);
		assert.isNull(output.natural);

	});

});