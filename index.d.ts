import {Options} from 'p-map';

/**
Run promise-returning & async functions a specific number of times concurrently.

@param count - Number of times to call `mapper`.
@param mapper - Expected to return a `Promise` or value.
@returns Fulfills when all promises returned from `mapper` are fulfilled, or rejects if any of the promises reject. The fulfilled value is an `Array` of the fulfilled values returned from `mapper` in order.

@example
```
import pTimes from 'p-times';

const result = await pTimes(5, index => createFixture(`🦄-${index + 1}`));

console.log(`Created fixtures: ${result.join(' ')}`);
//=> 'Created fixtures: 🦄-1 🦄-2 🦄-3 🦄-4 🦄-5'
```
*/
export default function pTimes<ValueType>(
	count: number,
	mapper: (index: number) => ValueType | PromiseLike<ValueType>,
	options?: Options
): Promise<ValueType[]>;

export {Options} from 'p-map';
