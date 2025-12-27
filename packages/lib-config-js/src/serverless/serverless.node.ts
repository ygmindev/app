import { serverlessConfig as configBase } from '@lib/config/serverless/serverless.base';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const serverlessConfig = configBase.extend(() => ({
  platform: PLATFORM.NODE,
}));
