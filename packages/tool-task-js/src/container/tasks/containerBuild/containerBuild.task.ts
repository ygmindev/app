import { Docker } from '@lib/backend/container/utils/Docker/Docker';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { CONTAINER_BUILD } from '@tool/task/container/tasks/containerBuild/containerBuild.constants';
import {
  type ContainerBuildModel,
  type ContainerBuildParamsModel,
} from '@tool/task/container/tasks/containerBuild/containerBuild.models';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const containerBuild = buildTask<ContainerBuildParamsModel, ContainerBuildModel>({
  name: CONTAINER_BUILD,

  prompts: [appPrompt()],

  task: async ({ app, platform }, context) => {
    if (!platform) throw new NotFoundError('platform');
    logger.info(`building container ${platform}`);
    const { containerConfig } = await import(`@lib/config/container/container.${platform}`);
    await new Docker({
      ...containerConfig.params(),
      image: app,
    }).build();
    return {};
  },
});
