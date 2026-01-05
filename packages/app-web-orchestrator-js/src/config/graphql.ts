import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { LogMessageResolver } from '@lib/model/logging/LogMessage/LogMessageResolver/LogMessageResolver';
import { JobResolver } from '@lib/model/orchestrator/Job/JobResolver/JobResolver';
import { PipelineResolver } from '@lib/model/orchestrator/Pipeline/PipelineResolver/PipelineResolver';
import { WorkflowResolver } from '@lib/model/orchestrator/Workflow/WorkflowResolver/WorkflowResolver';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: [WorkflowResolver, PipelineResolver, JobResolver, LogMessageResolver],

  schemaFilename: 'orchestrator.gql',
}));
