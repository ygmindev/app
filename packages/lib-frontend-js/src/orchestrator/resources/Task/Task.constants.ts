import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { TASK_RESOURCE_NAME } from '@lib/model/orchestrator/Task/Task.constants';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';

export const TASK_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'description' }],
  name: TASK_RESOURCE_NAME,
} satisfies ResourceParamsModel<TaskModel>;
