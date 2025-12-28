import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { TEST } from '@tool/task/node/workflows/test/test.constants';
import { type TestParamsModel } from '@tool/task/node/workflows/test/test.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const test: BuildWorkflowParamsModel<TestParamsModel, void, [StartParamsModel]> = {
  name: TEST,

  steps: (params, context) => [{ name: TEST }],
};
