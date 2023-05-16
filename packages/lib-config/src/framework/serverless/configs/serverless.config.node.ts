import { _serverlessConfig } from '@lib/config/framework/serverless/_serverless.config';
import type { _ServerlessConfigModel } from '@lib/config/framework/serverless/_serverless.models';
import { default as serverlessConfigParamsNode } from '@lib/config/framework/serverless/params/serverless.params.node';

const serverlessConfig: _ServerlessConfigModel = _serverlessConfig(
  serverlessConfigParamsNode,
);

export default serverlessConfig;
