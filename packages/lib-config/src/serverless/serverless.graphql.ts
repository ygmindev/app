import {
  type _ServerlessConfigModel,
  type ServerlessConfigModel,
} from '@lib/config/serverless/serverless.models';
import configBase from '@lib/config/serverless/serverless.node';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

export const config = defineConfig<ServerlessConfigModel, _ServerlessConfigModel>({
  ...configBase,

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

export default config;
