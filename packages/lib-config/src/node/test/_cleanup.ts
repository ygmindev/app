import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const platform = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);
const { cleanup } = require(`@lib/config/node/test/configs/test.${platform}`).testConfig;

export default cleanup;
