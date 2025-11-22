import { type UseTaskResourceModel } from '@lib/frontend/orchestrator/hooks/useTaskResource/useTaskResource.models';
import { TASK_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Task/Task.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';

export const useTaskResource = (): UseTaskResourceModel =>
  useResource<TaskModel>({
    ...TASK_RESOURCE_PARAMS,
  });
