import { _testConfig } from '@lib/config/node/test/_test.config';
import type {
  _TestConfigModel,
  _TestConfigParamsModel,
} from '@lib/config/node/test/_test.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';

const testConfig: _TestConfigModel = async () => {
  const testConfigParams = await importFromEnv<_TestConfigParamsModel>(
    '@lib/config/node/test/params/test.params',
  );
  return _testConfig(testConfigParams)();
};

export default testConfig;
