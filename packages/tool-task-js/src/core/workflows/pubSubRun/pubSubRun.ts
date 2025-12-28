import { pubSubConfig } from '@lib/config/pubSub/pubSub';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { START } from '@tool/task/core/tasks/start/start.constants';
import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { PUB_SUB_RUN } from '@tool/task/core/workflows/pubSubRun/pubSubRun.constants';
import {
  type PubSubRunModel,
  type PubSubRunParamsModel,
} from '@tool/task/core/workflows/pubSubRun/pubSubRun.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const pubSubRun: BuildWorkflowParamsModel<
  PubSubRunParamsModel,
  PubSubRunModel,
  [StartParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: PUB_SUB_RUN,

  steps: () => {
    const config = pubSubConfig.params();
    const command = config.command?.(config);
    if (command) {
      return [{ name: START, params: { command } }];
    }
    throw new NotFoundError('command');
  },
};
