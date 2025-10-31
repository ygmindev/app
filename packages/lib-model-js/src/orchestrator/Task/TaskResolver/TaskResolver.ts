import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { withResourceInput } from '@lib/backend/resource/utils/withResourceInput/withResourceInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { RequestContextModel } from '@lib/config/api/api.models';
import { Task } from '@lib/model/orchestrator/Task/Task';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { TaskImplementation } from '@lib/model/orchestrator/Task/TaskImplementation/TaskImplementation';
import { type TaskResolverModel } from '@lib/model/orchestrator/Task/TaskResolver/TaskResolver.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

const name = TASK_RESOURCE_NAME;

@withContainer()
@withResolver({ Resource: () => Task })
export class TaskResolver implements TaskResolverModel {
  protected _implementation = Container.get(TaskImplementation);

  @withResourceOutput({
    Resource: () => Task,
    // access: access?.default ?? access?.read ?? access?.[RESOURCE_METHOD_TYPE.GET_MANY],
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name,
  })
  async getMany(
    @withResourceInput({ Resource: () => Task, method: RESOURCE_METHOD_TYPE.GET_MANY, name })
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TaskModel> = {},
    @withContext()
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TaskModel>> {
    return this._implementation.getMany(input, context);
  }
}
