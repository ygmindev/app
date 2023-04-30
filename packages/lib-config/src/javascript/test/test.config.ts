import { _testConfig } from '@lib/config/javascript/test/_test.config';
import type { TestConfigParamsModel } from '@lib/config/javascript/test/test.models';

const config: TestConfigParamsModel =
  require(`@lib/config/javascript/test/configs/test.config.${process.env.ENV_PLATFORM}`).testConfig;

export const testConfig = _testConfig(config);
