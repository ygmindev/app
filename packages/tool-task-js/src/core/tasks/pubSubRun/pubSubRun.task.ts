import { pubSubConfig } from '@lib/config/pubSub/pubSub';
import { PUB_SUB_RUN } from '@tool/task/core/tasks/pubSubRun/pubSubRun.constants';
import {
  type PubSubRunModel,
  type PubSubRunParamsModel,
} from '@tool/task/core/tasks/pubSubRun/pubSubRun.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';

export const pubSubRun = buildTask<PubSubRunParamsModel, PubSubRunModel>({
  name: PUB_SUB_RUN,

  task: async (params, context) => {
    const config = pubSubConfig.params();
    const command = config.command(config);
    return execute({ command, root: context?.root });
  },
});
