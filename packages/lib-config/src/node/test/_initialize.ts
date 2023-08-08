import 'core-js';
import 'raf/polyfill';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

expect.extend({ toMatchImageSnapshot });
