import { config as configBase } from '@lib/config/graphql/graphql.base';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { TaskResolver } from '@lib/model/orchestrator/Task/TaskResolver/TaskResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  ...configBase,

  overrides: () => [
    {
      resolvers: filterNil([TaskResolver]),

      schemaFilename: 'orchestrator.gql',
    },
  ],
});
