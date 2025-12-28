import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { PING } from '@tool/task/dev/workflows/ping/ping.constants';
import { type PingParamsModel } from '@tool/task/dev/workflows/ping/ping.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const ping: BuildWorkflowParamsModel<PingParamsModel, void, [StartParamsModel]> = {
  name: PING,

  prompts: [{ key: 'test' }],

  steps: (params, context) => [{ name: PING }],
};
