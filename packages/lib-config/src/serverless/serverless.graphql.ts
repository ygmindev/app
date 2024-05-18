import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _serverless } from '@lib/config/serverless/_serverless';
import { config as configBase } from '@lib/config/serverless/serverless.node';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

const { _config, config } = defineConfig({
  _config: _serverless,

  config: configBase,

  overrides: () => [
    {
      functions: {
        [GRAPHQL]: {
          handler: 'src/functions/graphql/graphql.main',
          method: HTTP_METHOD.POST,
          pathname: `/api/${GRAPHQL}`,
        },
      },
    },
  ],
});

export { _config, config };
