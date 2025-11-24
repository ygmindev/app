import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { WorkflowResolver } from '@lib/model/orchestrator/Workflow/WorkflowResolver/WorkflowResolver';

let graphqlConfig = configBase;

graphqlConfig = graphqlConfig.extend(() => ({
  resolvers: [WorkflowResolver],

  schemaFilename: 'orchestrator.gql',
}));

export { graphqlConfig };
