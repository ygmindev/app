import { authorize } from '@lib/backend/auth/utils/authorize/authorize';
import { _graphql } from '@lib/config/graphql/_graphql';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  config: _graphql,

  params: () =>
    ({
      authorize,

      container: Container,
    }) as GraphqlConfigModel,
});

export default config;
