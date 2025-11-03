import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { Task } from '@lib/model/orchestrator/Task/Task';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';
import { type TaskImplementationModel } from '@lib/model/orchestrator/Task/TaskImplementation/TaskImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { TaskRunner } from '@tool/task/core/utils/TaskRunner/TaskRunner';
import reduce from 'lodash/reduce';

@withContainer()
export class TaskImplementation
  extends createResourceImplementation<TaskModel>({
    Resource: Task,
    count: async () => Object.keys(Container.get(TaskRunner).tasks).length,
    getMany: async (input, context) => {
      const x = {
        result: reduce(
          Container.get(TaskRunner).tasks,
          (result, v, k) => [...result, { _id: uid(), name: k }],
          [] as Array<TaskModel>,
        ),
      };
      return {
        result: [],
      };
    },
    name: TASK_RESOURCE_NAME,
  })
  implements TaskImplementationModel {}
