import type { _TestConfigParamsModel } from '@lib/config/javascript/test/_test.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';

const _getTestConfigParams = async (): Promise<_TestConfigParamsModel> => {
  const { testConfigParams } = await importFromEnv<_TestConfigParamsModel, 'testConfigParams'>(
    '@lib/config/javascript/test/params/test.params',
  );
  return testConfigParams;
};

beforeAll(async () => {
  const _testConfigParams = await _getTestConfigParams();
  _testConfigParams.onBeforeAll && (await _testConfigParams.onBeforeAll());
});

beforeEach(async () => {
  const _testConfigParams = await _getTestConfigParams();
  _testConfigParams.onBeforeEach && (await _testConfigParams.onBeforeEach());
});

afterAll(async () => {
  const _testConfigParams = await _getTestConfigParams();
  _testConfigParams.onBeforeAll && (await _testConfigParams.onBeforeAll());
});

afterEach(async () => {
  const _testConfigParams = await _getTestConfigParams();
  _testConfigParams.onBeforeAll && (await _testConfigParams.onBeforeAll());
});
