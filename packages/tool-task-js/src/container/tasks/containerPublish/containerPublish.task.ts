import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { containerBuild } from '@tool/task/container/tasks/containerBuild/containerBuild.task';
import { CONTAINER_PUBLISH } from '@tool/task/container/tasks/containerPublish/containerPublish.constants';
import {
  type ContainerPublishModel,
  type ContainerPublishParamsModel,
} from '@tool/task/container/tasks/containerPublish/containerPublish.models';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerPublish = buildTask<ContainerPublishParamsModel, ContainerPublishModel>({
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: CONTAINER_PUBLISH,

  prompts: [appPrompt()],

  task: async ({ app, isBuild = false, platform }, context) => {
    if (!platform) throw new NotFoundError('platform');
    logger.info(`publishing container ${platform}`);
    const { containerConfig } = await import(`@lib/config/container/container.${platform}`);
    const container = new Docker({ ...containerConfig.params(), image: app });
    isBuild && (await containerBuild({ app, platform }));
    await container.publish();
    return {};
  },
});
