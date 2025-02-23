import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { SubscriptionResolver } from '@lib/config/graphql/_subs';
import { config as configBase } from '@lib/config/graphql/graphql.base';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  ...configBase,

  overrides: () => [
    {
      resolvers: [SubscriptionResolver],

      schemaDir: fromStatic('graphql/websocket.gql'),
    },
  ],
});

export default config;
