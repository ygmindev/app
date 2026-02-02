import { Docker } from '@lib/backend/container/utils/Docker/Docker';
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

  task: async ({ dockerfilename, image }, context) => {
    await new Docker({ dockerfilename, image }).publish();
    return {};
  },
});
