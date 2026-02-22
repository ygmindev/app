import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { CONTAINER_RUN } from '@tool/task/container/tasks/containerRun/containerRun.constants';
import {
  type ContainerRunModel,
  type ContainerRunParamsModel,
} from '@tool/task/container/tasks/containerRun/containerRun.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerRun = buildTask<ContainerRunParamsModel, ContainerRunModel>({
  name: CONTAINER_RUN,

  task: async (params, context) => {
    const { containerConfig } = await import(
      `@lib/config/container/container.${process.env.ENV_PLATFORM}`
    );
    await new Docker({ ...containerConfig.params() }).run();
    return {};
  },
});
