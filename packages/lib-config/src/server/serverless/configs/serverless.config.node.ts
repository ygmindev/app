import { _serverlessConfig } from '@lib/config/server/serverless/_serverless.config';
import type { _ServerlessConfigModel } from '@lib/config/server/serverless/_serverless.models';
import { serverlessConfigParamsNode } from '@lib/config/server/serverless/params/serverless.params.node';

export const serverlessConfigNode: _ServerlessConfigModel = _serverlessConfig(
  serverlessConfigParamsNode,
);
