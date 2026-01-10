import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { CONTAINER_RUN } from '@tool/task/container/tasks/containerRun/containerRun.constants';
import {
  type ContainerRunModel,
  type ContainerRunParamsModel,
} from '@tool/task/container/tasks/containerRun/containerRun.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerRun = buildTask<ContainerRunParamsModel, ContainerRunModel>({
  name: CONTAINER_RUN,

  task: async (params, context) => {
    await Container.get(Docker).run();
    return {};
  },
});
