import { PING_TASK } from '@tool/task/dev/tasks/pingTask/pingTask.constants';
import { PING_WORKFLOW } from '@tool/task/dev/workflows/pingWorkflow/pingWorkflow.constants';
import { type PingWorkflowParamsModel } from '@tool/task/dev/workflows/pingWorkflow/pingWorkflow.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const pingWorkflow: BuildWorkflowParamsModel<
  PingWorkflowParamsModel,
  void,
  [PingWorkflowParamsModel]
> = {
  name: PING_WORKFLOW,

  prompts: [{ key: 'test' }],

  steps: (params, context) => [{ name: PING_TASK, params }],
};
