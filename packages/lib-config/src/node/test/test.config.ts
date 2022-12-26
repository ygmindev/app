import { _testConfig } from '@lib/config/node/test/_test.config';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM');
const config: TestConfigParamsModel =
  require(`@lib/config/node/test/configs/test.${APP_PLATFORM}.config`).testConfig;

export const testConfig = _testConfig(config);
