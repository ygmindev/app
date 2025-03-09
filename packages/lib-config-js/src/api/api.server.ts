import configBase from '@lib/config/api/api.base';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { type ApiConfigModel } from '@lib/config/api/api.models';
import { config as graphqlConfigMain } from '@lib/config/graphql/graphql.main';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';

export const config = defineConfig<ApiConfigModel>({
  ...configBase,

  overrides: () => [
    {
      routes: [
        // {
        //   method: HTTP_METHOD.GET,
        //   pathname: `${GRAPHQL}/${WEBSOCKET}`,
        //   protocol: HTTP_PROTOCOL.WEBSOCKET,
        //   schema: graphqlConfigWebsocket.params(),
        //   type: API_ENDPOINT_TYPE.GRAPHQL,
        // },

        {
          method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
          pathname: GRAPHQL,
          schema: graphqlConfigMain.params(),
          type: API_ENDPOINT_TYPE.GRAPHQL,
        },
      ],
    },
  ],
});

export default config;
