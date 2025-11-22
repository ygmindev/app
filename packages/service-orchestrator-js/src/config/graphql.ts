import { config as configBase } from '@lib/config/graphql/graphql.base';
import {
  type _GraphqlConfigModel,
  type GraphqlConfigModel,
} from '@lib/config/graphql/graphql.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
// import { WorkflowResolver } from '@lib/model/orchestrator/Workflow/WorkflowResolver/WorkflowResolver';

export const config = defineConfig<GraphqlConfigModel, _GraphqlConfigModel>({
  ...configBase,

  overrides: () => [
    {
      // resolvers: [WorkflowResolver],

      schemaFilename: 'orchestrator.gql',
    },
  ],
});
