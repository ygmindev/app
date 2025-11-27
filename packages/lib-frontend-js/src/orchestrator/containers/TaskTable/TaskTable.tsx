import { type LFCModel } from '@lib/frontend/core/core.models';
import { type TaskTablePropsModel } from '@lib/frontend/orchestrator/containers/TaskTable/TaskTable.models';
import { useWorkflowResource } from '@lib/frontend/orchestrator/hooks/useWorkflowResource/useWorkflowResource';
import { TASK_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Task/Task.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type TaskModel,
} from '@lib/model/orchestrator/Task/Task.models';

export const TaskTable: LFCModel<TaskTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useWorkflowResource();
  return (
    <ResourceTable<TaskModel>
      {...wrapperProps}
      {...TASK_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
