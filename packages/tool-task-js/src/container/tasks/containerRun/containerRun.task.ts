import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { CONTAINER_RUN } from '@tool/task/container/tasks/containerRun/containerRun.constants';
import {
  type ContainerRunModel,
  type ContainerRunParamsModel,
} from '@tool/task/container/tasks/containerRun/containerRun.models';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerRun = buildTask<ContainerRunParamsModel, ContainerRunModel>({
  name: CONTAINER_RUN,

  prompts: [appPrompt()],

  task: async ({ app, platform }, context) => {
    const { containerConfig } = await import(`@lib/config/container/container.${platform}`);
    await new Docker({ ...containerConfig.params(), image: app }).run();
    return {};
  },
});
