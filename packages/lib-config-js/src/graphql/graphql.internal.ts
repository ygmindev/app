import { graphqlConfig as configBase } from '@lib/config/graphql/graphql.base';
import { UtilityResolver } from '@lib/model/admin/Utility/UtilityResolver/UtilityResolver';
import { VendorResolver } from '@lib/model/admin/Vendor/VendorResolver/VendorResolver';
import { LogMessageResolver } from '@lib/model/logging/LogMessage/LogMessageResolver/LogMessageResolver';
import { JobResolver } from '@lib/model/orchestrator/Job/JobResolver/JobResolver';
import { PipelineResolver } from '@lib/model/orchestrator/Pipeline/PipelineResolver/PipelineResolver';
import { WorkflowResolver } from '@lib/model/orchestrator/Workflow/WorkflowResolver/WorkflowResolver';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const graphqlConfig = configBase.extend(() => ({
  resolvers: filterNil([
    JobResolver,
    LogMessageResolver,
    PipelineResolver,
    UtilityResolver,
    VendorResolver,
    WorkflowResolver,
  ]),

  schemaFilename: 'internal.gql',
}));
