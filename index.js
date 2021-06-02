import pMap from 'p-map';

const pTimes = async (count, mapper, options) =>
	pMap(Array.from({length: count}).fill(), (_, index) => mapper(index), options);

export default pTimes;
