import { pubSubConfig } from '@lib/config/pubSub/pubSub';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import {
  type PubSubRunModel,
  type PubSubRunParamsModel,
} from '@tool/task/core/tasks/pubSubRun/pubSubRun.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';

export const pubSubRun = buildTask({
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  task: async (params: PubSubRunParamsModel): Promise<PubSubRunModel> => {
    const config = pubSubConfig.params();
    return execute({ command: config.command(config) });
  },
});
