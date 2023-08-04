import 'core-js';
import 'raf/polyfill';

import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

expect.extend({ toMatchImageSnapshot });

// import { importConfig } from '#lib-config/core/utils/importConfig/importConfig';
// import { type TestConfigModel } from '#lib-config/node/test/test.models';

// beforeAll(async () => {
//   const { config } = await importConfig<TestConfigModel>('node/test/test');
//   config.onBeforeAll && (await config.onBeforeAll());
// });

// beforeEach(async () => {
//   const { config } = await importConfig<TestConfigModel>('node/test/test');
//   config.onBeforeEach && (await config.onBeforeEach());
// });

// afterAll(async () => {
//   const { config } = await importConfig<TestConfigModel>('node/test/test');
//   config.onFinishAll && (await config.onFinishAll());
// });

// afterEach(async () => {
//   const { config } = await importConfig<TestConfigModel>('node/test/test');
//   config.onFinishEach && (await config.onFinishEach());
// });
