import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { CONTAINER_PUBLISH } from '@tool/task/container/tasks/containerPublish/containerPublish.constants';
import {
  type ContainerPublishModel,
  type ContainerPublishParamsModel,
} from '@tool/task/container/tasks/containerPublish/containerPublish.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerPublish = buildTask<ContainerPublishParamsModel, ContainerPublishModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: CONTAINER_PUBLISH,

  task: async ({ isBuild = true }, context) => {
    await Container.get(Docker).publish(isBuild);
    return {};
  },
});
