'use strict';
const pMap = require('p-map');

module.exports = (count, mapper, opts) => pMap(Array(count).fill(), (el, i) => mapper(i), opts);
