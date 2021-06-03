import {expectType} from 'tsd';
import pTimes from './index.js';

expectType<Promise<string[]>>(pTimes(5, index => `🦄-${index + 1}`));
expectType<Promise<string[]>>(pTimes(5, async index => `🦄-${index + 1}`));
expectType<Promise<string[]>>(pTimes(5, index => `🦄-${index + 1}`, {concurrency: 1}));
