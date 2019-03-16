'use strict';
const pMap = require('p-map');

const pTimes = (count, mapper, options) =>
	pMap(new Array(count).fill(), (element, index) => mapper(index), options);

module.exports = pTimes;
module.exports.default = pTimes;
