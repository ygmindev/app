import { _testConfig } from '@lib/config/js/test/_test.config';
import type { TestConfigParamsModel } from '@lib/config/js/test/test.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);
const config: TestConfigParamsModel =
  require(`@lib/config/js/test/configs/test.${APP_PLATFORM}.config`).testConfig;

export const testConfig = _testConfig(config);
