import { serverlessConfig as configBase } from '@lib/config/serverless/serverless.base';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

let serverlessConfig = configBase;

serverlessConfig = serverlessConfig.extend(() => ({
  platform: PLATFORM.NODE,
}));

export { serverlessConfig };
