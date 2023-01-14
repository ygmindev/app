import { _serverlessConfig } from '@lib/config/server/serverless/_serverless.config';
import type { ServerlessConfigParamsModel } from '@lib/config/server/serverless/serverless.models';

const config: ServerlessConfigParamsModel =
  require(`@lib/config/server/serverless/configs/serverless.config.${process.env.ENV_PLATFORM}`).serverlessConfig;

export const serverlessConfig = _serverlessConfig(config);
