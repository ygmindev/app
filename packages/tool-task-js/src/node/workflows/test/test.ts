import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { TEST } from '@tool/task/node/workflows/test/test.constants';
import { type TestParamsModel } from '@tool/task/node/workflows/test/test.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const test: BuildWorkflowParamsModel<TestParamsModel, void, [TestParamsModel]> = {
  context: {
    environment: ENVIRONMENT.TEST,
  },

  name: TEST,

  prompts: [
    { isOptional: true, key: 'match' },

    { isOptional: true, key: 'isWatch', type: PROMPT_TYPE.CONFIRM },
  ],

  steps: (params, context) => [{ name: TEST }],
};
