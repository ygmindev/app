import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _serverless } from '#lib-config/platform/serverless/_serverless';
import { config as configBase } from '#lib-config/platform/serverless/serverless.base';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { GRAPHQL } from '#lib-shared/graphql/graphql.constants';
import { HTTP_METHOD, PING } from '#lib-shared/http/http.constants';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: configBase,

  overrides: [
    {
      functions: {
        [GRAPHQL]: {
          handler: 'src/node/graphql/graphql.main',
          method: HTTP_METHOD.POST,
          pathname: `/api/${GRAPHQL}`,
        },

        [PING]: {
          handler: 'src/core/ping/ping.main',
          method: HTTP_METHOD.GET,
          pathname: `/api/${PING}`,
        },
      },

      platform: PLATFORM.NODE,
    },
  ],
});

export { _config, config };
