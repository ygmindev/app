import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { LINT } from '@tool/task/node/workflows/lint/lint.constants';
import { type LintParamsModel } from '@tool/task/node/workflows/lint/lint.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const lint: BuildWorkflowParamsModel<LintParamsModel, void, [StartParamsModel]> = {
  name: LINT,

  steps: (params, context) => [{ name: LINT }],
};
