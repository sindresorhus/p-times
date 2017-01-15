'use strict';
const pMap = require('p-map');

const symbolEnd = Symbol('pTimes.end');

module.exports = (count, mapper, opts) => {
	const results = [];
	let times = 0;

	for (let i = 0; i < count; i++) {
		results.push(mapper(i));
	}

	return new Promise(resolve => {
		Promise.all(results).then(values => {
			for (const value of values) {
				if (value === symbolEnd) {
					break;
				}

				times++;
			}

			resolve(pMap(Array(times).fill(), (el, i) => mapper(i), opts));
		});
	});
};

module.exports.end = symbolEnd;
