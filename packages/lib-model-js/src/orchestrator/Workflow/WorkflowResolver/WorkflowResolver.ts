import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { WorkflowImplementation } from '@lib/model/orchestrator/Workflow/WorkflowImplementation/WorkflowImplementation';
import { type WorkflowResolverModel } from '@lib/model/orchestrator/Workflow/WorkflowResolver/WorkflowResolver.models';

@withContainer()
@withResolver({ Resource: () => Workflow })
export class WorkflowResolver
  extends createResourceResolver({
    Resource: () => Workflow,
    ResourceImplementation: WorkflowImplementation,
    access: { read: ACCESS_LEVEL.PUBLIC },
    name: WORKFLOW_RESOURCE_NAME,
  })
  implements WorkflowResolverModel {}
