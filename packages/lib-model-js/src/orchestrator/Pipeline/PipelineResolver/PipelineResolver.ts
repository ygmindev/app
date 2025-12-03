import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { Pipeline } from '@lib/model/orchestrator/Pipeline/Pipeline';
import { PIPELINE_RESOURCE_NAME } from '@lib/model/orchestrator/Pipeline/Pipeline.constants';
import { PipelineImplementation } from '@lib/model/orchestrator/Pipeline/PipelineImplementation/PipelineImplementation';
import { type PipelineResolverModel } from '@lib/model/orchestrator/Pipeline/PipelineResolver/PipelineResolver.models';

@withContainer()
@withResolver({ Resource: () => Pipeline })
export class PipelineResolver
  extends createResourceResolver({
    Resource: () => Pipeline,
    ResourceImplementation: PipelineImplementation,
    access: { read: ACCESS_LEVEL.PUBLIC },
    name: PIPELINE_RESOURCE_NAME,
  })
  implements PipelineResolverModel {}
