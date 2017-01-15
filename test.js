import test from 'ava';
import m from './';

const shouldStop = value => {
	return value === 4;
};

const f = async value => {
	if (shouldStop(value)) {
		return m.end;
	}

	return value;
};

// See `p-map` for more comprehensive tests
test(async t => {
	t.deepEqual(await m(5, async i => i * 10), [0, 10, 20, 30, 40]);
	t.deepEqual(await m(0, async i => i * 10), []);
});

test('end', async t => {
	t.deepEqual(await m(8, i => f(i + 1)), [1, 2, 3]);
});
