import 'core-js';
import 'raf/polyfill';

import { MetadataStorage } from '@mikro-orm/mongodb';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { TextDecoder, TextEncoder } from 'util';

jest.restoreAllMocks();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

expect.extend({ toMatchImageSnapshot });

MetadataStorage.clear();
