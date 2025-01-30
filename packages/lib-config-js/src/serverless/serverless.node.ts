import configBase from '@lib/config/serverless/serverless.base';
import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const config = defineConfig<ServerlessConfigModel, _ServerlessConfigModel>({
  ...configBase,

  overrides: () => [
    {
      platform: PLATFORM.NODE,
    },
  ],
});

export default config;
