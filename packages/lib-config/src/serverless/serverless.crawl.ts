import { _serverless } from '@lib/config/serverless/_serverless';
import { config as configBase } from '@lib/config/serverless/serverless.node';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: configBase,

  overrides: () => [
    {
      functions: {
        crawl: {
          handler: 'src/functions/crawl/crawl.main',
          method: HTTP_METHOD.GET,
          pathname: '/api/crawl',
        },
      },
    },
  ],
});

export { _config, config };
