import { _serverlessConfig } from '@lib/config/framework/serverless/_serverless.config';
import type { _ServerlessConfigModel } from '@lib/config/framework/serverless/_serverless.models';
import { serverlessConfigParamsNode } from '@lib/config/framework/serverless/params/serverless.params.node';

export const serverlessConfig: _ServerlessConfigModel = _serverlessConfig(
  serverlessConfigParamsNode,
);
