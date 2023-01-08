import { _testConfig } from '@lib/config/javascript/test/_test.config';
import type { TestConfigParamsModel } from '@lib/config/javascript/test/test.models';

const config: TestConfigParamsModel =
  require(`@lib/config/javascript/test/configs/test.${process.env.ENV_PLATFORM}.config`).testConfig;

export const testConfig = _testConfig(config);
