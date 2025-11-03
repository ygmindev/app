import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { Task } from '@lib/model/orchestrator/Task/Task';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { TaskImplementation } from '@lib/model/orchestrator/Task/TaskImplementation/TaskImplementation';
import { type TaskResolverModel } from '@lib/model/orchestrator/Task/TaskResolver/TaskResolver.models';

@withContainer()
@withResolver({ Resource: () => Task })
export class TaskResolver
  extends createResourceResolver({
    Resource: () => Task,
    ResourceImplementation: TaskImplementation,
    access: { read: ACCESS_LEVEL.PUBLIC },
    name: TASK_RESOURCE_NAME,
  })
  implements TaskResolverModel {}
