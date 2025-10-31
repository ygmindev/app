import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { RequestContextModel } from '@lib/config/api/api.models';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { type TaskImplementationModel } from '@lib/model/orchestrator/Task/TaskImplementation/TaskImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';

@withContainer()
export class TaskImplementation implements TaskImplementationModel {
  protected _taskRunner = Container.get(TaskRunner);

  getMany = async (
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TaskModel>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TaskModel>> => {
    this._taskRunner.registry
    return {
      result: [],
    };
  };
}
