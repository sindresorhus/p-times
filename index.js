import pMap from 'p-map';

export default function pTimes(count, mapper, options) {
	return pMap(Array.from({length: count}).fill(), (_, index) => mapper(index), options);
}
