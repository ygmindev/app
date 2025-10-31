import { type UseTaskResourceModel } from '@lib/frontend/orchestrator/hooks/useTaskResource/useTaskResource.models';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import {
  type TaskModel,
} from '@lib/model/orchestrator/Task/Task.models';
import { TASK_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Task/Task.constants';

export const useTaskResource = (): UseTaskResourceModel =>
  useResource<TaskModel>({
    ...TASK_RESOURCE_PARAMS,
  });
