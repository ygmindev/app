import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';

const { testConfigParams } = await importFromEnv<{ testConfigParams: _TestConfigParamsModel }>(
  '@lib/config/javascript/test/params/test.params',
);

testConfigParams.setup?.onLoad && (await testConfigParams.setup?.onLoad());

beforeAll(async () => {
  testConfigParams.setup?.onBeforeAll && (await testConfigParams.setup.onBeforeAll());
});

beforeEach(async () => {
  testConfigParams.setup?.onBeforeEach && (await testConfigParams.setup.onBeforeEach());
});

afterAll(async () => {
  testConfigParams.setup?.onBeforeAll && (await testConfigParams.setup.onBeforeAll());
});

afterEach(async () => {
  testConfigParams.setup?.onBeforeAll && (await testConfigParams.setup.onBeforeAll());
});
