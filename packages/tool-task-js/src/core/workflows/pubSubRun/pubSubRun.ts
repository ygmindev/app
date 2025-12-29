import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type PubSubRunParamsModel as _PubSubRunParamsModel } from '@tool/task/core/tasks/pubSubRun/pubSubRun.models';
import { PUB_SUB_RUN } from '@tool/task/core/workflows/pubSubRun/pubSubRun.constants';
import {
  type PubSubRunModel,
  type PubSubRunParamsModel,
} from '@tool/task/core/workflows/pubSubRun/pubSubRun.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const pubSubRun: BuildWorkflowParamsModel<
  PubSubRunParamsModel,
  PubSubRunModel,
  [_PubSubRunParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: PUB_SUB_RUN,

  steps: (params) => [{ name: PUB_SUB_RUN, params }],
};
