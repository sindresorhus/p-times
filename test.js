import test from 'ava';
import m from './';

// See `p-map` for more comprehensive tests
test(async t => {
	t.deepEqual(await m(5, async i => i * 10), [0, 10, 20, 30, 40]);
	t.deepEqual(await m(0, async i => i * 10), []);
});
