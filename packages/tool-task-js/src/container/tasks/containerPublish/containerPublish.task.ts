import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { containerBuild } from '@tool/task/container/tasks/containerBuild/containerBuild.task';
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

  task: async ({ isBuild = false, name }, context) => {
    const { containerConfig } = await import(`@lib/config/container/container.${name}`);
    const container = new Docker(containerConfig.params());
    isBuild && (await containerBuild({ name }));
    await container.publish();
    return {};
  },
});
