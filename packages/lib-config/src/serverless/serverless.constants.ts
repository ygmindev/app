import { type ServerlessConfigModel } from '@lib/config/serverless/serverless.models';

export const SERVERLESS_CONFIG: Pick<ServerlessConfigModel, 'configFile'> = {
  configFile: 'serverless.js',
};
