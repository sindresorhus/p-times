import {expectType} from 'tsd';
import pTimes = require('.');

expectType<Promise<string[]>>(pTimes(5, i => `🦄-${i + 1}`));
expectType<Promise<string[]>>(pTimes(5, async i => `🦄-${i + 1}`));
expectType<Promise<string[]>>(pTimes(5, i => `🦄-${i + 1}`, {concurrency: 1}));
