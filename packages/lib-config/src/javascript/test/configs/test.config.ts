import { _testConfig } from '@lib/config/javascript/test/_test.config';
import type {
  _TestConfigModel,
  _TestConfigParamsModel,
} from '@lib/config/javascript/test/_test.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';

export const testConfig: _TestConfigModel = async () => {
  const { testConfigParams } = await importFromEnv<_TestConfigParamsModel, 'testConfigParams'>(
    '@lib/config/javascript/test/params/test.params',
  );
  return _testConfig(testConfigParams)();
};
