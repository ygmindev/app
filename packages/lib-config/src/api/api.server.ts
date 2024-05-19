import { config as configBase } from '@lib/config/api/api.base';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type ApiConfigModel } from '@lib/config/api/api.models';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

const { config } = defineConfig({
  config: configBase,

  overrides: [
    {
      routes: [
        {
          method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
          pathname: GRAPHQL,
          type: API_ENDPOINT_TYPE.GRAPHQL,
        },
      ],
    } as ApiConfigModel,
  ],
});

export { config };
