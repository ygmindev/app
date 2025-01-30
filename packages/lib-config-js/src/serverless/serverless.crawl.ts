import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import configBase from '@lib/config/serverless/serverless.node';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

export const config = defineConfig<ServerlessConfigModel, _ServerlessConfigModel>({
  ...configBase,

  overrides: () => [
    {
      functions: {
        crawl: {
          handler: 'src/functions/crawl/crawl.main',
          method: HTTP_METHOD.GET,
          pathname: '/api/crawl',
        },
      } as unknown as ServerlessConfigModel['functions'],
    },
  ],
});

export default config;
