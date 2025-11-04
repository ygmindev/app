import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { Task } from '@lib/model/orchestrator/Task/Task';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { type TaskImplementationModel } from '@lib/model/orchestrator/Task/TaskImplementation/TaskImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterArray } from '@lib/shared/core/utils/filterArray/filterArray';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';

const getMany: TaskImplementationModel['getMany'] = async (input, context) => {
  const values = Container.get(TaskRunner).tasks;
  return {
    result: filterArray(values, input?.filter, input?.options?.skip, input?.options?.take),
  };
};

@withContainer()
export class TaskImplementation
  extends createResourceImplementation<TaskModel>({
    Resource: Task,
    count: async () => Object.keys(Container.get(TaskRunner).tasks).length,
    getConnection: async ({ filter, id, pagination } = {}) => {
      const values = await getMany({ filter });
      const { result } = await getConnection({
        count: values.result?.length ?? 0,
        getMany: async () => values,
        input: { filter, id },
        pagination,
      });
      return { result: result ?? undefined };
    },
    getMany,
    name: TASK_RESOURCE_NAME,
  })
  implements TaskImplementationModel {}
