'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const assert = chai.assert;

chai.use(chaiHttp);

describe('Api Endpoint', () => {

	it('when receives an natural date returns the expected info', (done) => {

		chai.request(server)
			.get('/february%2025,%202017')
			.end((err, res) => {
				
				const dateExpected = new Date('february 25, 2017');
				const unixExpected = dateExpected.getTime();
				const naturalExpected = 'February 25, 2017';

				assert.strictEqual(res.status, 200);
				assert.isObject(res.body);
				assert.property(res.body, 'unix');
				assert.property(res.body, 'natural');
				assert.strictEqual(res.body.unix, unixExpected);
				assert.strictEqual(res.body.natural, naturalExpected);

				done();
			});

	});

	it('when receives an unix timestamp returns the expected info', (done) => {

		const date = new Date('february 25, 2017');

		chai.request(server)
			.get(`/${date.getTime()}`)
			.end((err, res) => {
				
				const unixExpected = date.getTime();
				const naturalExpected = 'February 25, 2017';

				assert.strictEqual(res.status, 200);
				assert.isObject(res.body);
				assert.property(res.body, 'unix');
				assert.property(res.body, 'natural');
				assert.strictEqual(res.body.unix, unixExpected);
				assert.strictEqual(res.body.natural, naturalExpected);

				done();
			});

	});

	it('when receives an invalid argument returns the null for all attributes', (done) => {

		chai.request(server)
			.get('/invalid')
			.end((err, res) => {

				assert.strictEqual(res.status, 200);
				assert.isObject(res.body);
				assert.property(res.body, 'unix');
				assert.property(res.body, 'natural');
				assert.isNull(res.body.unix);
				assert.isNull(res.body.natural);

				done();
			});

	});

});