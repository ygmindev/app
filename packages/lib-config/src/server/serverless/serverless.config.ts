import { _serverlessConfig } from '@lib/config/server/serverless/_serverless.config';
import type { ServerlessConfigParamsModel } from '@lib/config/server/serverless/serverless.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);
const config: ServerlessConfigParamsModel =
  require(`@lib/config/node/serverless/configs/serverless.${APP_PLATFORM}.config`).serverlessConfig;

export const serverlessConfig = _serverlessConfig(config);
