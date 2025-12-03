import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { JobResolver } from '@lib/model/orchestrator/Job/JobResolver/JobResolver';
import { PipelineResolver } from '@lib/model/orchestrator/Pipeline/PipelineResolver/PipelineResolver';
import { WorkflowResolver } from '@lib/model/orchestrator/Workflow/WorkflowResolver/WorkflowResolver';

let graphqlConfig = configBase;

graphqlConfig = graphqlConfig.extend(() => ({
  resolvers: [WorkflowResolver, PipelineResolver, JobResolver],

  schemaFilename: 'orchestrator.gql',
}));

export { graphqlConfig };
