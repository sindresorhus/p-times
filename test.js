import test from 'ava';
import pTimes from './index.js';

// See `p-map` for more comprehensive tests
test('main', async t => {
	t.deepEqual(await pTimes(5, async i => i * 10), [0, 10, 20, 30, 40]);
	t.deepEqual(await pTimes(0, async i => i * 10), []);
});
